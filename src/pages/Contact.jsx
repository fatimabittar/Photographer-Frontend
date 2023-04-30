import React from "react";
import AboutHeader from "../components/About/AboutHeader/AboutHeader";
import ba from "../components/About/AboutHeader/ba.jpg";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <div>
      <AboutHeader backgroundImage={ba} />
      <div className="contact-container">
        <div className="contact-details">
          <h3>Contact Details</h3>

          <div className="contact-card">
            <div className="contact-icon"></div>
            <div>
              <h5>Call us</h5>
              <p>phone nuber</p>
            </div>
          </div>
        </div>
        <div className="contact-form"></div>
      </div>
    </div>
  );
};
