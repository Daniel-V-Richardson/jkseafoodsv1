/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./NavBar.css";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi"
import logo from "../../../images/logo.png";

function NavBar() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="logo">
          <NavLink className="logo_img" to="/">
            <img src={logo} height="90px" width="70px"></img>
          </NavLink>
        </div>
        <div className="links">
          <NavLink className="link" to="/">
            Home
          </NavLink>

          <NavLink className="link" to="/products">
            Products
          </NavLink>


          <NavLink className="link" to="/about">
            About
          </NavLink>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>

      <div className="centerSide">
        <div className="links">
          <NavLink className="link" to="/search">
            <input type="text" placeholder="Search fish" />
          </NavLink>
          <button><FiSearch /></button>
        </div>
      </div>
      <div className="rightSide">
        <div className="links">
          <NavLink to="/account">
            <AiOutlineUser className="link" />
          </NavLink>
          <NavLink to="/cart">
            <FiShoppingCart className="link" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
