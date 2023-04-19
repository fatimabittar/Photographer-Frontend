import React from "react";
import "../styles/Shop.css";
import image1 from "../images/ba2.jpg";
import image2 from "../images/paris.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Shop = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    getAllItems();
  }, []);

  //GET ALL
  const getAllItems = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/Items/");
      setItems(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // function scrollToTop() {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }

  // Filter items based on category
  const boomFilteredItems = Items.filter((item) => item.category === "boom");
  const printFilteredItems = Items.filter((item) => item.category === "print");
  const lenseFilteredItems = Items.filter((item) => item.category === "lense");
  return (
    <>
      <header>
        <img src={image1} alt="background-image" />
      </header>

      <h1 className="titles">BOOOM</h1>
      <div className="boom">
        {boomFilteredItems.map((item) => {
          return (
            <div key={item._id} className="col-1">
              <img src={image2} alt="" />
              <h2>{item.title}</h2>
              <h6>{item.description}</h6>
              <Link className="buy">BUY NOW</Link>

              <Link to={`/shop/${item._id}`} className="details">
                More Details
              </Link>
            </div>
          );
        })}
      </div>

      <h1 className="titles">Prints</h1>
      <div className="prints">
        {printFilteredItems.map((item) => {
          return (
            <div key={item._id} className="col-1">
              <img src={image2} alt="" />
              <h2>{item.title}</h2>
              <h6>{item.description}</h6>
              <Link className="buy">BUY NOW</Link>
              <Link to={`/shop/${item._id}`} className="details">
                More Details
              </Link>
            </div>
          );
        })}
      </div>

      <h1 className="titles">Lenses</h1>
      <div className="lense">
        {lenseFilteredItems.map((item) => {
          return (
            <div key={item._id} className="col-1">
              <img src={image2} alt="" />
              <h2>{item.title}</h2>
              <h6>{item.description}</h6>
              <Link className="buy">BUY NOW</Link>
              <Link to={`/shop/${item._id}`} className="details">
                More Details
              </Link>
            </div>
          );
        })}
      </div>


    </>
  );
};

export default Shop;
