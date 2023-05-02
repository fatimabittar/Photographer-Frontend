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
import { ServicePricingForm } from "../components/ServicePricingForm";
import { DeleteButton } from "../components/DeleteButton";

export const DashboardServices = () => {
  const [services, setServices] = useState([]);
  const [side_images, setSide_images] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/services`)
  //     .then((res) => setServices(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/images`)
      .then((res) => setSide_images(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getServices = () => {
    axios
      .get(`${API_URL}/services`)
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => getServices(), []);

  const onEditServicePlanning = async (id, data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("status", "customer");
    if (data.image) formData.append("image_url", data.image);

    await axios({
      url: `${API_URL}/services/${id}`,
      data: formData,
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => getServices())
      .catch((err) => console.log(err));
  };

  return (
    <div className="services">
      <ServicesBackground />
      <div className="services-pricings-plans">
        <div className="title-pricing-plans">
          <h1>Pricing Plan</h1>
          <p>Affordable packages contact us for further information</p>
        </div>
        <ServicePricingForm
          onSuccess={() => getServices()}
          onError={(error) => console.log(error)}
          visible
        />
        <div className="services-plans">
          {services
            .filter((service) => service.status === "customer")
            .map((service) => (
              <div>
                <ServicesPricingPlan
                  id={service.id}
                  title={service.title}
                  price={service.price}
                  description={service.description}
                  imageSrc={service.image}
                />
                <ServicePricingForm
                  service={service}
                  onSuccess={() => getServices()}
                  onError={(error) => console.log(error)}
                  visible
                />
                <DeleteButton
                  path={`/services/${service.id}`}
                  onSuccess={() => getServices()}
                  onError={(error) => console.log(error)}
                  visible
                >
                  You are going to delete this service
                </DeleteButton>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className="services-students-offers">
          <h1>We Also Offer Educational Services </h1>
        </div>
        <div className="sideServ">
          <div style={{ width: "50%" }}>
            {side_images
              .filter((img) => img.page === "services" && img.section === 1)
              .map((img) => (
                <SideImage
                  key={img.id}
                  image={img.image}
                  className="side-image"
                />
              ))}
            {console.log(
              "hi",
              side_images.filter(
                (img) => img.page === "services" && img.section === 1
              )
            )}
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
