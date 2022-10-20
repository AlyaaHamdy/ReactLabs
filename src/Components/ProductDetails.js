import React,{ useState } from 'react';
import { useLocation } from 'react-router-dom'

function ProductDetails() {
    const [data,setData]=useState(useLocation().state)
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default ProductDetails