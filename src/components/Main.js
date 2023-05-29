import React from 'react';
import logo from '../img/logo.png';
import logo2 from '../img/logo2.png';
import { NavLink, Outlet } from 'react-router-dom';
import Card from './Card';
import { searchMeals } from '../requests/product';

export default function Main() {
  return (
    <div>
      <header>
        <div className="row d-flex align-items-center">
          <div className='col-12 col-md-4 d-flex align-items-center justify-content-center'>
            <a href="/" className="text-decoration-none ">
              <img src={logo} alt='logo'  style={{ width: "100%", maxWidth: "250px", height: "auto" }} />
            </a>
          </div>
          <div className='col-12 col-md-4 d-flex justify-content-center align-item-center mt-5'>
            <h1 className='d-flex justify-content-center mx-5' style={{ fontFamily: "cursive", fontSize: "5vw", color: "#D10034" }}>
              <span style={{marginLeft:"70px"}}>Cook</span> <span className='mx-3 mt-5' style={{ fontSize: "8vw", color: "#393E46", letterSpacing: "0.2em" }}>Yourself</span>
            </h1>
          </div>
          <div className='col-12 col-md-4  d-flex justify-content-end'>
            <a href="/" className="text-decoration-none">
              <img src={logo2} alt='logo2' style={{ width: "100%", maxWidth: "350px", height: "auto" }} />
            </a>
          </div>
        </div>
        <div className='row bg-black navbar' id="navrow">
          <div className='col-12' id='navCol'>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <NavLink className='btn nav-link btn-danger baslik mx-5 mt-2' to={'/'} style={{ color: "white", fontSize: '20px' }}>Home</NavLink>
              </li>
              <li>
                <NavLink className='btn nav-link btn-danger baslik mx-5 mt-2' to={'/favorite'} style={{ color: "white", fontSize: '20px' }}>Favorite</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
