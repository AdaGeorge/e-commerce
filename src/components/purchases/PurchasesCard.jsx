import React from 'react'
import ProductPurchase from './ProductPurchase'


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const PurchasesCard = ({purchase}) => {
  const dateData = new Date(purchase.updatedAt)

  const datePurchase = `${months[dateData.getMonth()]} ${dateData.getDate()}, ${dateData.getFullYear()}`


  return (
    <article className='puchase-card'>
      <h3 className='puchase-date'>{datePurchase}</h3>
      {
        purchase &&
          <ProductPurchase 
            key={purchase.id}
            product={purchase}
          />
        
      }
    </article>
  )
}

export default PurchasesCard