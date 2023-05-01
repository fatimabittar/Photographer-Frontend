import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const navigationStyle = ({ isActive }) => ({
  color: isActive ? "gray" : "white",
  textDecoration: "none",
});

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // const adminLoggedIn = true;
  // const homePath = adminLoggedIn ? "/dashboard" : "";

  return (
    <div className="header">
      <NavLink to={`/`} style={navigationStyle}>
        <img className="logo" src={logo} alt="JAY KHAWAND" />
      </NavLink>
      <div className="navigation-bar">
        <NavLink to={`/gallery`} style={navigationStyle}>
          Gallery
        </NavLink>
        <NavLink to={`/services`} style={navigationStyle}>
          Services
        </NavLink>
        <NavLink to={`/shop`} style={navigationStyle}>
          Shop
        </NavLink>
        <NavLink to={`/about`} style={navigationStyle}>
          About
        </NavLink>
        <NavLink to={`/contact`} style={navigationStyle}>
          Contact
        </NavLink>
        {/* Logout Icon */}
        {/* <button onClick={handleLogout} className="logout-btn">
          <LogoutOutlinedIcon />
        </button> */}
      </div>
    </div>
  );
};
export default Header;
