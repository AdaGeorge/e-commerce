import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'
import HeaderScreen from '../shared/HeaderScreen'
import FooterScreen from '../shared/FooterScreen'
import './styles/cartScreen.css'
import { setCartGlobal } from '../../store/slices/cart.slice'


const CartScreen = () => {

  const dispatch = useDispatch()

  const postPurchase = () => {

    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    axios.post(URL, objPurchase, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
      })
      .catch(err => console.log(err.data))
  }

  const cart = useSelector(state => state.cart)

  let totalPriceCart = 0
  if(cart) {

    const cb = (acc, cv) => {
      return acc + (Number(cv.product?.price) * cv.quantity)
    }

    totalPriceCart = cart.reduce(cb, 0)
  }

  return (
    <div>
      <HeaderScreen/>
    <div className='cart-screen'>
      
      <h2 className='cart-screen-title'> <b>
          My<span> Ca</span>
          r<span></span>t
        </b></h2>
      <div className='cart-info-container'>
      {
        cart?.map(productCart => (
          <CartInfo 
            key={productCart.id}
            productCart={productCart}
          />
        ))
      }
      </div>
      {
        cart ?
          <h2 className='cart__total'>
            <span className='cart__total-label'>Total: $</span>
            <span className='cart__total-number'>{totalPriceCart}</span>
          </h2>
        :
          <h2 className='cart__empty'>The cart is empty</h2>
      }
      <button onClick={postPurchase} className='btn-cart'>
        <h3>Confirm Purchase</h3>
      </button>
    </div>  
    <FooterScreen/>
    </div>
  )
}

export default CartScreen