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
  console.log(products)
  useEffect(()=>{
    if (inputSearchValue){
      const filterP = products.filter(product => {
        product.title.toLowerCase().includes(inputSearchValue.toLowerCase())
      })
      setFilteredProducts(filterP)
    }
  },[inputSearchValue])
  
  
console.log(inputSearchValue)

  return (
    <div>
     <HeaderScreen/>

     <InputSearch setInputSearchValue={setInputSearchValue}/>
     
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