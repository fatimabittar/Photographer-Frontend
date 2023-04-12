import React, { useEffect } from "react";
import { API_URL } from "../constants";
import axios from "axios";
import { useState } from "react";
import "../styles/Services.css";
// import icon1 from "../images/icon-1.svg";
// import icon2 from "../images/icon-2.svg";
// import icon3 from "../images/icon-3.svg";
// import icon4 from "../images/icon-4.svg";
// import icon5 from "../images/icon-5.svg";
// import icon6 from "../images/icon-6.svg";
import { ServicesBackground } from "../components/ServicesBackground";
// import { ServicesFeature } from "../components/ServicesFeature";

export const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/services`)
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="services">
      <ServicesBackground />
    </div>
  );
};
