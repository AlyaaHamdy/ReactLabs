import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addFavourite } from '../Redux/Actions/FavouriteAction'

function ProductCard({ data, type }) {
  //console.log(data)
  let nav = useNavigate();
  const dispatch = useDispatch();
  function show(data)
  {
      
      nav('/productDetails',{state:data});
  }
  function addProduct(data) {
    console.log("ooooooo")
    dispatch(addFavourite(data))
  }
  return (
    <div>
     {/* {console.log(data)}  */}
      <div className="card" style={{ width: '18rem',marginLeft:'50px',marginTop:'50px' }}>
        <img src={data.images[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          {!type && <button onClick={() => { show(data) }} className="btn btn-primary m-3">Show Details</button>}
          {!type && <button onClick={() => { addProduct(data) }} className="btn btn-danger m-3">add Favourite</button>}
        </div>
      </div>
    </div>
  )
}

export default ProductCard