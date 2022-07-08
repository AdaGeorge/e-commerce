import React from 'react'

const ProductsPurchase = ({product}) => {


  return (
    <section className='purchase-product'>
      <h4>{product.title}</h4>
      <p>{product.productsInCart.quantity}</p>
      <p>$ {product.price}</p>
    </section>
  )
}

export default ProductsPurchase 