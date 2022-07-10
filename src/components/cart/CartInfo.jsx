import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import { FaTrashAlt } from 'react-icons/fa'

const CartInfo = ({productCart}) => {
  
  const dispatch = useDispatch()

  const deleteProductFromCart = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productCart.id}`

    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch(err => console.log(err.data))
  }

  return (
    <section className='product-cart'>
      <h4>{productCart.brand}</h4>
      <h3>{productCart.title}</h3>
      <p>{productCart.productsInCart.quantity}</p>
      <p>{productCart.price}</p>
      <div onClick={deleteProductFromCart} className='cart-info__btn'>
        <FaTrashAlt/>
      </div>
    </section>
  )
}

export default CartInfo