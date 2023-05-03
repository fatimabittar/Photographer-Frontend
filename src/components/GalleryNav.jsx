import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fab, TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Add } from '@mui/icons-material';
import axios from "axios";

export const GalleryNav = (props) => {
const [selected, setSelected] = useState("architecture");
const path = window.location.pathname;
const [openMenu, setOpenMenu] = useState(false);
const [showAlert, setShowAlert] = useState(false);
const [category, setCategory] = useState('');
const [image, setImage] = useState('');

const nav = useNavigate();
const handleSubmit = async(event) => {
  event.preventDefault();
  console.log(category)
  const formData = new FormData();
  formData.append('category', category);
  formData.append('file', image);
  console.log(formData)
  try {
    const response = await axios('http://localhost:5000/api/gallery/photo/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
     },
      data: formData,
     
    });
    console.log(formData)
    const data = await response.json();
    console.log(data);
    setCategory('')
    setImage('')
  } catch (error) {
    console.error(error);
  }
  setShowAlert(false);
};

const handleClickB = () => {
  setShowAlert(true);
}

const handleClick = (type, event) => {
event.preventDefault();
setSelected(type);
props.handleSelectedCategory(type);
};

return (
  <div className="nav" style={{ display: 'flex', gap: '0' }}>
    <div className="pbuttons">
    <Fab color="default" aria-label="add" onClick={handleClickB} style={{marginTop:'1rem',marginLeft:'4rem'}}>
        <Add fontSize="large" />
      </Fab>
      <button
        className="pbutton"
        onClick={(event) => handleClick('architecture', event)}
        style={{ borderColor: selected === 'architecture' ? 'white' : '' }}
      >
        ARCHITECTURE
      </button>
      <button
        className="pbutton"
        onClick={(event) => handleClick('commercial', event)}
        style={{ borderColor: selected === 'commercial' ? 'white' : '' }}
      >
        COMMERCIAL
      </button>
      <button
        className="pbutton"
        onClick={(event) => handleClick('ecommerce', event)}
        style={{ borderColor: selected === 'ecommerce' ? 'white' : '' }}
      >
        ECOMMERCE
      </button>
      <button
        className="pbutton"
        onClick={(event) => handleClick('fashion', event)}
        style={{ borderColor: selected === 'fashion' ? 'white' : '' }}
        >
          FASHION
        </button>
        <button
          className="pbutton"
          onClick={(event) => handleClick('fine art', event)}
          style={{ borderColor: selected === 'fine art' ? 'white' : '' }}
        >
          FINE ART
        </button>
        <button
          className="pbutton"
          onClick={(event) => handleClick('jewellery', event)}
          style={{ borderColor: selected === 'jewellery' ? 'white' : '' }}
        >
          JEWELLERY
        </button>
        <button
          className="pbutton"
          onClick={(event) => handleClick('portrait', event)}
          style={{ borderColor: selected === 'portrait' ? 'white' : '' }}
        >
          PORTRAIT
        </button>
      </div>
      {showAlert && (
        <div className="alert" style={{marginRight:'1rem',marginTop:'1rem'}}>
          <Alert severity="info">
            <form onSubmit={handleSubmit}>
              <TextField
                label="Category"
                variant="outlined"
                margin="dense"
                onChange={(event) => setCategory(event.target.value)}
              />
              <div style={{display:'flex',gap:'1rem'}}>
              <TextField
                type="file"
                variant="outlined"
                margin="dense"
                onChange={(event) => setImage(event.target.files[0])}
/>

              <Button type="submit">Submit</Button>
              </div>
             
            </form>
          </Alert>
        </div>
)}
</div>
)}

