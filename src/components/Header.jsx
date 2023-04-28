import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const navigationStyle = ({ isActive }) => ({
  color: isActive ? "gray" : "white",
  textDecoration: "none",
});

export const Header = () => {
  const adminLoggedIn = true;
  const homePath = adminLoggedIn ? "/dashboard" : "";

  return (
    <div className="header">
      <NavLink to={`${homePath}`} style={navigationStyle}>
        <img className="logo" src={logo} alt="JAY KHAWAND" />
      </NavLink>
      <div className="navigation-bar">
        <NavLink to={`${homePath}/gallery`} style={navigationStyle}>
          Gallery
        </NavLink>
        <NavLink to={`${homePath}/services`} style={navigationStyle}>
          Services
        </NavLink>
        <NavLink to={`${homePath}/shop`} style={navigationStyle}>
          Shop
        </NavLink>
        <NavLink to={`${homePath}/about`} style={navigationStyle}>
          About
        </NavLink>
        <NavLink to={`${homePath}/contact`} style={navigationStyle}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};
