import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="socialMedia">
          <a href="https://www.instagram.com/ryancornelio_/">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/ryanphillips.cornelio/">
            <FacebookIcon />
          </a>
          <a href="https://www.linkedin.com/in/ryan-phillips-iserhills-cornelio/">
            <LinkedInIcon />
          </a>
        </div>
        <p> &copy; 2022 ryan.cornelio@gmail.com </p>
      </div>
    </>
  );
}

export default Footer;
