import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [stock, setStock] = useState(0);
  //const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  let navigate = useNavigate();

  //ADD
  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/Items/", {
        title,
        description,
        price,
        size,
        stock,
        // image,
        category,
      });

      navigate("/adminshop");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>ADD Items</h1>

      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="ItemTitle" className="form-label">
            Ttile
          </label>
          <input
            type="text"
            className="form-control"
            id="ItemTitle"
            placeholder="Item title"
            aria-describedby="item title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Itemdescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="Itemdescription"
            placeholder="Item description"
            aria-describedby="description title"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ItemPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="ItemPrice"
            placeholder="Item Price"
            aria-describedby="Item Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ItemSize" className="form-label">
            Size
          </label>
          <input
            type="text"
            className="form-control"
            id="ItemSize"
            placeholder="Item size"
            aria-describedby="Item size"
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ItemStock" className="form-label">
            Stock
          </label>
          <input
            type="text"
            className="form-control"
            id="ItemStock"
            placeholder="Item stock"
            aria-describedby="Item title"
            onChange={(e) => {
              setStock(e.target.value);
            }}
          />
        </div>

        {/* for image */}
        {/* <div className="mb-3">
          <label htmlFor="ItemStock" className="form-label">
            IMage
          </label>
          <input
            type="text"
            className="form-control"
            id="ItemStock"
            placeholder="Item stock"
            aria-describedby="Item title"
            onChange={(e) => {
              setStock(e.target.value);
            }}
          />
        </div> */}

        <div className="mb-3">
          <label htmlFor="ItemCategory" className="form-label">
            Category
          </label>
          <select
            className="form-control"
            id="ItemCategory"
            aria-describedby="Item category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="boom">Boom</option>
            <option value="prints">Prints</option>
            <option value="lense">Lense</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>
    </>
  );
}

export default AddItem;
