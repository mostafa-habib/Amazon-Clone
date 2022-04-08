import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import NoMatch from "./components/nomatch/NoMatch";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./Firebase";
import Payment from "./components/payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./components/orders/Orders";
import React from 'react'
import Footer from "./components/footer/Footer";

const promise = loadStripe(
  "pk_test_51Kk7RtKTwVvKkRx1BMtxPor8essIbr5IQPDN9FYnm2PeYRipfSjUErMQBbSJfUsg1Rp97BujsDWB0mujeVvFsgvI00AacY0wXN"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // the user is logined
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // user is logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [user]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={[<Header />, <Home />,<Footer />]} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={[<Header />, <Checkout />, <Footer />]} />
        <Route
          path="/payment"
          element={[
            <Header />,
            <Elements stripe={promise}>
              {" "}
              <Payment />{" "}
            </Elements>,
            <Footer />
          ]}
        />
        <Route path="/orders" element={[<Header />, <Orders />, <Footer />]} />
        <Route path="*" element={[<Header />, <NoMatch />]} />
      </Routes>
    </div>
  );
}

export default App;
