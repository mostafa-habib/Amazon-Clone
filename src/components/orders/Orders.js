import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
import "./Orders.css";
import {query, collection, onSnapshot, orderBy, doc} from 'firebase/firestore'


function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try{
    if (user) {

      const ref = collection(db, "users", user?.uid, "orders");
      const orderedOrders = query(ref, orderBy('created', 'desc'))
      onSnapshot(orderedOrders, snapshot => {
           setOrders(snapshot.docs.map(doc => ({
             id: doc.id,
             data: doc.data()
           })))
        })

    } else {
      setOrders([]);
    }
  }
  catch{
    console.log("something goes wrong")
  }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your orders history</h1>
      <div className="orders__order">
          {
              orders?.map((order,index) => (
                  <Order key ={index} order={order} />
              ))
          }
      </div>
    </div>
  );
}

export default Orders;
