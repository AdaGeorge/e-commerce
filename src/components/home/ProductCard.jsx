import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/productCard.css'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import Alert from '../shared/Alert'


const ProductCard = ({product}) => {

  const [isOpenAlert, setIsOpenAlert] = useState(false)

  const navigate = useNavigate()

  const goToProductId = () => navigate(`/product/${product.id}`)

  const dispatch = useDispatch()

  const addCartProduct = e => {
    e.stopPropagation()
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
  
    const objProduct = {
      quantity: 1,
      productId: product.id
    }
  
    axios.post(URL, objProduct, getConfig() )
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCart())
        setIsOpenAlert(true)
      })
      .catch(err => console.log(err.data))
  }

  return (
    <article onClick={goToProductId} className='card-product'>
      {/* <Alert setIsOpenAlert={setIsOpenAlert} isOpenAlert={isOpenAlert} content={'Product added to cart'}/> */}
      <header className='card-product__header'>
      <img 
          className='card-product__img-back' 
          src={product?.images[1]?.url} 
          alt="" 
        />
        <img 
          className='card-product__img' 
          src={product?.images[0]?.url} 
          alt="" 
        />
      </header>
      <div className='card-product__body'>
        <h2 className='card-product__title'>{product.title}</h2>
        <div className='card-product__price-container'>
          <h3 className='card-product__price-label'>Price</h3>
          <p className='card-product__price-number'>$ {product.price}</p>
        </div>
        <button onClick={addCartProduct} className='card-product__btn'>
        <i><FaShoppingCart/></i>
        </button>
      </div>
    </article>
  )
}

export default ProductCard