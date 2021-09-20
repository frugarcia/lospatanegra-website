// Dependencies
import React from "react";
import { RiInstagramLine, RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>Síguenos en ...</div>
        <div className="rrss-container">
          <a href="https://www.instagram.com/lospatanegra.snp">
            <RiInstagramLine size="2rem" color="#034256" />
          </a>
          <a href="https://www.facebook.com/LosPataNegraSNP">
            <RiFacebookCircleFill size="2rem" color="#034256" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
