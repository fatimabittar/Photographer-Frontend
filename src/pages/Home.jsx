import React from "react";
import { useState, useEffect } from "react";
import { SideImage } from "../components/SideImage";
import photographerBckgrnd from "../images/photographer.jpg";
import axios from "axios";
import { API_URL } from "../constants";
import PhotoAlbum from "react-photo-album";
import "../styles/Home.css";

export const Home = () => {
  const [side_images, setSide_images] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/images`)
      .then((res) => setSide_images(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log("side_images:", side_images);

  const photoAlbumImages = side_images
    .filter((img) => img.page === "home" && img.section === 2)
    .map((img) => ({
      src: `data:image/jpeg;base64,${img.image}`,
      width: img.width,
      height: img.height,
    }));
  console.log("photoAlbumImages:", photoAlbumImages);

  return (
    <div className="home">
      <div className="home-one">
        <img
          src={photographerBckgrnd}
          alt="backgroundImage"
          className="HomeBackgrnd"
        />
      </div>
      <div className="home-two">
        <section className="section-1">
          {side_images
            .filter((img) => img.page === "home" && img.section === 1)
            .map((img) => (
              <SideImage
                key={img.id}
                imgSrc={img.image}
                className="section-1-img"
                width={img.width}
                height={img.height}
              />
            ))}
        </section>
        <section className="section-2">
          {side_images
            .filter((img) => img.page === "home" && img.section === 2)
            .map((img) => (
              <div className="photoalbum-gallery" key={img.id}>
                <PhotoAlbum layout="rows" photos={photoAlbumImages} />
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};
