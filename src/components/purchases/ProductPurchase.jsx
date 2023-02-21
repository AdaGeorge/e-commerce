import React from 'react'

const ProductsPurchase = ({product}) => {

  return (
    <section className='purchase-product'>
      <h4>{product?.product?.title}</h4>
      <p>{product?.quantity}</p>
      <p>$ {product?.product?.price}</p>
    </section>
  )
}

export default ProductsPurchase 