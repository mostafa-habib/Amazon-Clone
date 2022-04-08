import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider'
import img from '../../images/ads.jpg'

function Checkout() {
  const [{basket, user}] = useStateValue();
  return (
    <div className='checkout'>

        <div className='checkout__left'>

          <img className='checkout__ad'
          src={img}
          alt=''/>
         
          <div>
          <h3>Hello {user ? user.email : "Guest"}</h3>
            <h2 className='checkout__title'>{basket?.length ? "Your shopping basket" : "Basket empty"}</h2>
            {basket.map(item => (
              <CheckoutProduct key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))
          }
          </div>

        </div>

        <div className='checkout__right'>
          <Subtotal />
        </div>

    </div>
  )
}

export default Checkout