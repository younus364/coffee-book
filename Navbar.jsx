import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
          <div className="navbar backdrop-blur-xl shadow-sm z-50 fixed px-2 md:px-4 lg:px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4">
        <NavLink className={({isActive})=>`font-bold ${isActive? 'text-warning':'hover:text-warning'}`} to='/'>Home</NavLink>
      <NavLink className={({isActive})=>`font-bold ${isActive? 'text-warning':'hover:text-warning'}`} to='/coffees'>Coffees</NavLink>
      <NavLink className={({isActive})=>`font-bold ${isActive? 'text-warning':'hover:text-warning'}`} to='/dashboard'>Dashboard</NavLink>
      </ul>
    </div>
    <NavLink to='/' className="btn btn-ghost text-xl">coffee_book</NavLink>
  </div>
  <div className="navbar-end hidden md:flex lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
    <NavLink className={({isActive})=>`font-bold ${isActive? 'text-warning':'hover:text-warning'}`} to='/'>Home</NavLink>
      <NavLink className={({isActive})=>`font-bold ${isActive? 'text-warning':'hover:text-warning'}`} to='/coffees'>Coffees</NavLink>
      <NavLink className={({isActive})=>`font-bold ${isActive? 'text-warning':'hover:text-warning'}`} to='/dashboard'>Dashboard</NavLink>
    </ul>
  </div>
  
</div> 
        </div>
    );
}

export default Navbar;