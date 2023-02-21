import React, { useEffect, useState } from 'react'
import HeaderScreen from '../shared/HeaderScreen'
import FooterScreen from '../shared/FooterScreen'
import './styles/purchasesScreen.css'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import PurchasesCard from './PurchasesCard'

const PurchasesScreen = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(purchases)

  return (
    <div>
      <HeaderScreen/>
      <div className='purchases'>
      <h2 className='purchases__title'>My Purchases</h2>
      <div className='purchases__container'>
        {
          purchases?.map(purchase => (
            <PurchasesCard 
              key={purchase.id}
              purchase={purchase}
            />
          )) || <h5 className='purchase_err'>No purchases to show</h5>
        }
      </div>
    </div>
      <FooterScreen/>
    </div>
  )
}

export default PurchasesScreen