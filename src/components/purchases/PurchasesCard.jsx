import React from 'react'
import ProductPurchase from './ProductPurchase'

const PurchasesCard = ({purchase}) => {


  return (
    <article className='puchase-card'>
      <h3>{purchase.updatedAt}</h3>
      {
        purchase.cart.products.map(product => (
          <ProductPurchase 
            key={product.id}
            product={product}
          />
        ))
      }
    </article>
  )
}

export default PurchasesCard