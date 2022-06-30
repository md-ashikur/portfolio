import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-200 px-10 fixed top-0 z-10">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li tabindex="0">
          <a class="">
            Portfolio
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><Link to="/">Websites</Link></li>
            <li><Link to="/">Graphics</Link></li>
          </ul>
        </li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl"><span></span> Ashik</a>
  </div>
 
  <div class="navbar-end hidden lg:flex ">
  <ul class="menu menu-horizontal p-0">
  <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li tabindex="0">
          <a class="">
            Portfolio
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><Link to="/">Websites</Link></li>
            <li><Link to="/">Graphics</Link></li>
          </ul>
        </li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;