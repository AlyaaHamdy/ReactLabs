import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import ProductCard from '../ProductCard';

function Favourites() {
  const [data,setData]=useState(useLocation().state);
  const favourite = useSelector(state => state.favouriteReducer.favourite);
  return (
    <div className='row'>
    {
      favourite.map((item) => <div className='col-4 mt-3' ><ProductCard type="favourite" data={item} /></div>)
    }
    </div>
  )
}

export default Favourites

