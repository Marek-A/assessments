import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../images/soclogo.png"

function NavigationBar() {
  return (

    <div className='navbar'>
      <img className="nav-logo" src={Logo} alt="" />
      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>


  );
};


export default NavigationBar