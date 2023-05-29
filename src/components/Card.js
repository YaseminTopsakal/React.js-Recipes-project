import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Card({ product }) {
  return (
  
    <div className=''>
  <img src={product.strMealThumb} alt={product.strMeal}  class="card-img-top " />
 
    {/* <h5 class="card-title">{product.strMeal}</h5> */}
    <div className='row text-center'> 
    <Link to={`/${product.idMeal}`} className="btn btn-link text-center" style={{ color: "white",textDecoration:"none" }}>{product.strMeal}</Link>

    </div>
  

    </div>



  )
}
