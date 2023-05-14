import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>Bangladesh</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              1-2323-343-23
            </h4>
          </div>
          <div className="eamil">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              info@gmail.com
            </h4>
          </div>
        </div>

        {/* Right Section */}
        <div className="right">
          <h4>About the company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            excepturi, deleniti amet totam alias ducimus.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
