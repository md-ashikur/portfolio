import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
 
    return (
        <div>
            <div class="navbar text-[#333] bg-gradient-to-r from-[#00f298] via-[#02cfb4] to-[#02cfb4] px-10 fixed top-0 z-10">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow text-[#333] bg-gradient-to-r from-[#00f298] via-[#02cfb4] to-[#02cfb4] rounded-box w-52">
        <li><NavLink to="/"  className="bg-transparent">Home</NavLink></li>
        <li><NavLink to="/about" className="bg-transparent">About</NavLink></li>
        <li tabindex="0"><NavLink to="/portfolio" className="bg-transparent">Portfolio</NavLink>
        </li>
        <li><NavLink to="/blog" className="bg-transparent">Blog</NavLink></li>
        <li><NavLink to="/contact" className="bg-transparent">Contact</NavLink></li>
      </ul>
    </div>
    <p class="btn btn-ghost normal-case text-xl"><span></span> Ashik</p>
  </div>
 
  <div class="navbar-end hidden lg:flex ">
  <ul class="menu menu-horizontal p-0 ">
  <li><NavLink to="/"  className="bg-transparent">Home</NavLink></li>
        <li ><NavLink to="/about" className="bg-transparent">About</NavLink></li>
        <li tabindex="0">
          <NavLink to="/portfolio"  className="bg-transparent">
            Portfolio
          </NavLink>
        </li>
        <li><NavLink to="/blog" className="bg-transparent">Blog</NavLink></li>
        <li><NavLink to="/contact" className="bg-transparent">Contact</NavLink></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;