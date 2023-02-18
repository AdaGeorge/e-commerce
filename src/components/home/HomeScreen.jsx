import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FooterScreen from '../shared/FooterScreen'
import HeaderScreen from '../shared/HeaderScreen'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './styles/homeScreen.css'


const HomeScreen = () => {

  const [inputSearchValue, setInputSearchValue] = useState();
  const [filteredProducts, setFilteredProducts] = useState([])
  const products = useSelector(state => state.products)
  useEffect(()=>{
    if (inputSearchValue && products){
      const filtered = []
      products.map(product => {
        if(product.title.toLowerCase().includes(inputSearchValue.toLowerCase())){
          filtered.push(product)
        }
      })
      setFilteredProducts(filtered)
    }
  },[inputSearchValue])

  return (
    <div>
     <HeaderScreen/>

     <InputSearch setInputSearchValue={setInputSearchValue}/>
     
     <div className='products-container'>
        {
          filteredProducts[0] 
          ?
          filteredProducts?.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          )) 
          :
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