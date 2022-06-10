import React from "react";
import CheckCircleIcon from "@material-ui/icons/ShoppingCartRounded";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
// import { Link } from "react-router-dom";

const NotFound = () => {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="PageNotFound">
      <CheckCircleIcon />

      {/* <Typography>Page Not Found </Typography> */}
      <Typography>Click Below to Confirm Payment</Typography>
      <div className="PageNotFoundButton">
        <button type="button" onClick={refreshPage}>
          {" "}
          <span>Confirm</span>{" "}
        </button>
      </div>
      {/* <Link to={refreshPage}>Confirm</Link> */}
    </div>
  );
};

export default NotFound;
