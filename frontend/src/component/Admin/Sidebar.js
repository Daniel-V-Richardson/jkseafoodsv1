import React from "react";
import "./Sidebar.css";
// import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        {/* <img src={logo} alt="Ecommerce" /> */}
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;