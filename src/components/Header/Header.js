import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
  return (
    <nav className="bg-[#1C2B35]">
      <div className="flex justify-between items-center h-20  w-5/6 mx-auto ">
        <img src={logo} alt="" />
        <div className="space-x-10 text-white link">
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
