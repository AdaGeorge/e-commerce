import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../home/ProductCard'
import Loader from '../shared/Loader'
import './styles/similarProducts.css'

const SimilarProducts = ({product}) => {

  const [filterProducts, setFilterProducts] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const allProducts = useSelector(state => state.products)

  useEffect(() => {
    setIsLoading(true)
    if(allProducts.length !== 0){
      const filter = allProducts.filter(e => e.category.name === product?.category.name)
      setFilterProducts(filter)
      setIsLoading(false)
    }
  }, [product])

  return (
    <article className='similar-products'>
      <h2 className='similar-products__title'><b>
          Disco<span>ver S</span>
          <span>imilar </span>items
        </b></h2>
     {
      isLoading ? 
      <Loader/> :
     <div className='products-container'>
        {
          product &&
          filterProducts?.map(e => {
            if(e.title !== product?.title){
              return (
              <ProductCard 
                key={e.id}
                product={e}
              />)
            }
          })
        }
      </div>
      }
    </article>
  )
}

export default SimilarProducts