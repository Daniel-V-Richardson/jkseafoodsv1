import React from "react";
import "./AboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "15vmax", height: "15vmax", margin: "0vmax" }}
              src="https://res.cloudinary.com/jkseafoods/image/upload/v1645801480/logo/logo_ub8jgl.png"
              alt="Founder"
            />
            <Typography>JK Seafoods</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              An Website for purchasing Dry Fishes Online.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Get in Touch with us</Typography>
            <a
              href="https://youtube.com/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;