import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import navbarlogo from "../../media/Logo.png";

const Navbar = ({ isScrolling }) => {
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <ul className='lista'>
        <li>
          <div className='navbar-logo'>
            <Link className='navbar-logo' to='/'>
              <img src={navbarlogo} alt='Logo'></img>
            </Link>
          </div>
        </li>
        <li>
          <Link className='text-link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='text-link' to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link className='text-link' to='/slider'>
            Promos
          </Link>
        </li>
        <li>
          <Link className='text-link' to='/footer'>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
