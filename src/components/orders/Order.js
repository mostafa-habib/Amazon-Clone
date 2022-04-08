import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function Order({ order }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="order">
      <div className="order__info">
        <div>
          <h2>Order</h2>
          <p>{moment.unix(order.data.created).format("MMMM D Y, h:mma")}</p>
        </div>
        <p className="order__id">
          <small>{order.id}</small>
        </p>
      </div>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hiddenButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3>Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
