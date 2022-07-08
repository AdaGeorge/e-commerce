import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'
import HeaderScreen from '../shared/HeaderScreen'
import FooterScreen from '../shared/FooterScreen'
import './styles/cartScreen.css'


const CartScreen = () => {

  const postPurchase = () => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    axios.post(URL, objPurchase, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }

  const cart = useSelector(state => state.cart)

  return (
    <div>
      <HeaderScreen/>
    <div className='cart-screen'>
      
      <h2>My Cart</h2>
      {
        cart?.map(productCart => (
          <CartInfo 
            key={productCart.id}
            productCart={productCart}
          />
        ))
      }
      <button onClick={postPurchase}>
        <h3>Confirm Purchase</h3>
      </button>
    </div>  
    <FooterScreen/>
    </div>
  )
}

export default CartScreen