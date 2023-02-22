import React from 'react'

const ProductsPurchase = ({product}) => {

  return (
    <section className='purchase-product'>
      <h4> Product: {product?.product?.title}</h4>
      <p>Quantity: {product?.quantity}</p>
      <p>$ {product?.product?.price}</p>
    </section>
  )
}

export default ProductsPurchase 