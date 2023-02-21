import React, { useState } from 'react'

const RangePrice = ({setInputSearchValue, inputSearchValue}) => {

  const [value, setValue] = useState()


  const handleValue = (data)=>{
    setValue(data.toFixed(2))
    setInputSearchValue({
      ...inputSearchValue,
      maxPrice: data.toFixed(2),
    });
  }

  return (
    <div className='rangecontainer'>
        <h5 className='max_price_range'>Max: ${value}</h5>
        <input className='slider_range' type="range" min="0" max="3000" step="any" onChange={(e=>handleValue(Number(e.target.value)))}></input>
    </div>
  )
}

export default RangePrice