import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import FooterScreen from '../shared/FooterScreen'
import HeaderScreen from '../shared/HeaderScreen'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './styles/homeScreen.css'


const HomeScreen = () => {

  const products = useSelector(state => state.products)


  return (
    <div>
     <HeaderScreen/>

     <InputSearch/>
     
     <div className='products-container'>
        {
          products?.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))
        }
      </div>

     <FooterScreen/>
    </div>
  )
}

export default HomeScreen