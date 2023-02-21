import React, { useState } from 'react'
import './styles/productInfo.css'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import { getAllProductsCart } from '../../store/slices/cart.slice'


const ProductInfo = ({product}) => {

  const [counter, setCounter] = useState(1)

  const dispatch = useDispatch()

  const addToCart = () => {

    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

    const addproduct = {
      id: product.id,
      quantity: counter
    }

    axios.post(URL, addproduct, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch(err => console.log(err.data))
  }

  const minusOne = () => {
    const minus = counter - 1
    if(minus >= 1){
      setCounter(minus)
    } 
  }

  const plusOne = () => setCounter(counter + 1)


  return (
    <article className='product-info'>
      <h2 className='product-info__title'>{product?.title}</h2>
      <p className='product-info__description'>{product?.description}</p>
      <div className='card-product__price-quantity-container'>
      <div className='card-product__price-container'>
        <h3 className='card-product__price-label product-info__label'>Price</h3>
        <p className='card-product__price-number product-info__number'>$ {product?.price}</p>
      </div>
      <div className='product-info__quantity-container'>
        <div onClick={minusOne} className='product-info__minus'>-</div>
        <div>{counter}</div>
        <div onClick={plusOne} className='product-info__plus'>+</div>
      </div>
      </div>
      <button onClick={addToCart} className='product-info-btn'>Add to Cart <FaShoppingCart/></button>
    </article>
  )
}

export default ProductInfo