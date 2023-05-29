import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../requests/slice';

export default function FavoriteDetail(props) {

  const dispatch =useDispatch();

  const handleRemoveFav =()=>{
    dispatch(removeFavorite(props.product.idMeal));
  }

  return (
    <div className='col-4'>
    <img src={props.product.strMealThumb} alt={props.product.strMeal}  class="card-img-top " />
   
   <div className=' row text-center'>
    <div className='col-10' >
    <Link to={`/${props.product.idMeal}`} className="btn btn-link text-center" style={{ color: "white",textDecoration:"none" }}>{props.product.strMeal}</Link>

    </div>
    <div className='col-2'>
    <FaTrash style={{color:"#780000"}} title='delete' onClick={handleRemoveFav}/>

    </div>
   </div>
    
  
      </div>
  )
}
