import React from "react";
import { ReactNavbar } from "overlay-navbar";
import "./nav.css";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "white",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link3Text: "Contact",
  link4Text: "About",
  link3Url: "/contact",
  link4Url: "/about",
  link3Size: "1.3vmax",
  link3Color: "rgba(35, 35, 35,0.8)",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link3ColorHover: "#eb4034",
  link3Margin: "1vmax",
 
};

const Header = () => {
  return <ReactNavbar {...options} className="navbar" />;
};

export default Header;
