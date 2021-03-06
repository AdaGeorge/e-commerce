import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../home/ProductCard'
import './styles/similarProducts.css'

const SimilarProducts = ({product}) => {

  const [filterProducts, setFilterProducts] = useState()

  const allProducts = useSelector(state => state.products)

  useEffect(() => {
    if(allProducts.length !== 0){
      const filter = allProducts.filter(e => e.category.name === product?.category)
      setFilterProducts(filter)
    }
  }, [product])

  return (
    <article className='similar-products'>
      <h2 className='similar-products__title'><b>
          Disco<span>ver S</span>
          <span>imilar </span>items
        </b></h2>
      <div className='products-container'>
        {
          filterProducts?.map(e => {
            if(e.title !== product.title){
              return (
              <ProductCard 
                key={e.id}
                product={e}
              />)
            }
          })
        }
      </div>
    </article>
  )
}

export default SimilarProducts