import React from "react";
import { useParams } from "react-router-dom"; //params, (short for parameters) are used to pass data between different components or pages.
import axios from "axios";
import { useState, useEffect } from "react";
import image1 from "../images/paris.jpg";

const ItemDetail = () => {
  let { itemID } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    getById();
  }, []);

  const getById = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/Items/${itemID}`,
      );
      setItem(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* {item && <h1>{item.title}</h1>}
      {item && <h1>{item.description}</h1>}
      {item && <h1>{item.size}</h1>}
      {item && <h1>{item.price}</h1>}
      {item && <h1>{item.stock}</h1>}
      {item && <h1>{item.category}</h1>} */}

      <div className="container">
        <div className="col-1">
          <img src={image1} alt="" />
        </div>
        <div className="col-2">
          {item && <h1>{item.title}</h1>}
          {item && <h1>{item.description}</h1>}
          {item && <h1>{item.size}</h1>}
          {item && <h1>{item.price}</h1>}
          <button>buy now</button>
        </div>
        <div className="col-3">{item && <h1>{item.stock}</h1>}</div>
      </div>
    </>
  );
};

export default ItemDetail;
