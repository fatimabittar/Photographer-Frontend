import React, { useEffect } from "react";
import { API_URL } from "../constants";
import axios from "axios";
import { useState } from "react";
import "../styles/Services.css";
import { ServicesBackground } from "../components/ServicesBackground";
import { ServicesPricingPlan } from "../components/ServicesPricingPlan";
import { SideImage } from "../components/SideImage";
// import sidimg from "../images/sideImage.jpg";
import { ServicesStudentsOffer } from "../components/ServicesStudentsOffer";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export const DashboardServices = () => {
  const [services, setServices] = useState([]);
  const [side_images, setSide_images] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/services`)
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/images`)
      .then((res) => setSide_images(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .put(`${API_URL}/services`)
      .then((res) => setSide_images(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="services">
      <ServicesBackground />
      <div className="services-pricings-plans">
        <div className="title-pricing-plans">
          <h1>Pricing Plan</h1>
          <p>Affordable packages contact us for further information</p>
        </div>
        <div className="services-plans">
          {services
            .filter((service) => service.status === "customer")
            .map((service) => (
              <ServicesPricingPlan
                title={service.title}
                price={service.price}
                description={service.description}
                imageSrc={service.image}
                editable
              />
            ))}
        </div>
      </div>
      <div>
        <div className="services-students-offers">
          <h1>We Also Offer Educational Services </h1>
        </div>
        <div className="sideServ">
          <div className="">
            {side_images
              .filter((img) => img.page === "services" && img.section === 1)
              .map((img) => (
                <SideImage
                  key={img.id}
                  imgSrc={img.image}
                  className="side-image"
                />
              ))}
          </div>
          <div className="services-offers">
            {services
              .filter((service) => service.status === "student")
              .map((service) => (
                <ServicesStudentsOffer
                  icon={faCamera}
                  title={service.title}
                  description={service.description}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
