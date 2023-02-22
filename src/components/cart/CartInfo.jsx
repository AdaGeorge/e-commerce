import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import { FaTrashAlt } from 'react-icons/fa'
import './styles/cartScreen.css'

const CartInfo = ({productCart}) => {
  
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const deleteProductFromCart = () => {
    setIsLoading(true)
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${productCart.id}`
    axios.delete(URL, getConfig())
      .then(res => {
        dispatch(getAllProductsCart())
      })
      .catch(err => console.log(err.data))
  }

  return (
    <section className='product-cart'>
      <h4>{productCart?.product?.brand}</h4>
      <h3>{productCart?.product?.title}</h3>
      <p>{productCart.quantity}</p>
      <p>{productCart?.product?.price}</p>
      <div onClick={deleteProductFromCart} className='cart-info__btn'>
        {
          isLoading ?
          'Deleting...':
          <FaTrashAlt/>
        }
      </div>
    </section>
  )
}

export default CartInfo