import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter"></div>

      <div className="midFooter">
        <div className="footer__socials">
          <a href="https://facebook.com" target="blank">
            <FaFacebook />
          </a>
          <a href="https://github.com/Daniel-V-Richardson?tab=repositories" target="blank">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target="blank">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="blank">
            <FaTwitter />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Ʀɨ¢Ϧ♬Ʀᖱន០⩎. All rights reserved.</small>
        </div>
      </div>

      <div className="rightFooter"></div>
    </footer>
  );
};

export default Footer;
