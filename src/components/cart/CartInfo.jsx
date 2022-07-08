import React from 'react'

const CartInfo = ({productCart}) => {
  console.log(productCart)
  return (
    <section className='product-cart'>
      <h4>{productCart.brand}</h4>
      <h3>{productCart.title}</h3>
      <p>{productCart.productsInCart.quantity}</p>
      <p>{productCart.price}</p>
    </section>
  )
}

export default CartInfo