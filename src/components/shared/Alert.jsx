import React from 'react'
import './styles/alert.css'

const Alert = ({ setIsOpenAlert, isOpenAlert, content}) => {
    const closeAlert = ()=>{
        setIsOpenAlert(false)
    }
  return (
    <div className={ isOpenAlert ? 'open_alert' : 'not_open_alert'}>
        <h1>{content}</h1>
        <h2 onClick={closeAlert}>x</h2>
    </div>
  )
}

export default Alert