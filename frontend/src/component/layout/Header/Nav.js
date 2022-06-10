/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GiFlatfish } from "react-icons/gi";
import { RiSearchLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink className="nav-icon" to="/">
          <AiOutlineHome />
        </NavLink>
      </div>
      <div>
        <NavLink to="/about">
          <AiOutlineUser className="nav-icon" />
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-icon" to="/contact">
          <MdAlternateEmail />
        </NavLink>
      </div>

      <div>
        <NavLink className="nav-icon" to="/products">
          <GiFlatfish />
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-icon" to="/search">
          <RiSearchLine />
        </NavLink>
      </div>
      <div>
        <NavLink className="nav-icon" to="/cart">
          <FiShoppingCart />
        </NavLink>
      </div>

      <div>
        <NavLink className="nav-icon" to="/login">
          <FiLogIn />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
