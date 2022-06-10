import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:jkseafoods20@gmail.com" target="blank">
        <Button>Contact: jkseafoods20@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;