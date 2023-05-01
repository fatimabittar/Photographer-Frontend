import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const GalleryNav = (props) => {
const [selected, setSelected] = useState("architecture");
const path = window.location.pathname;
const [openMenu, setOpenMenu] = useState(false);
const nav = useNavigate();

const handleClick = (type, event) => {
event.preventDefault();
setSelected(type);
props.handleSelectedCategory(type);
};

return (
<div className="nav" style={{ display: 'flex' , gap:'0'}}>
  <div className="pbuttons1">
        <Link className="pbutton"
              to="/GalleryDashboard"
              style={{ textDecoration: 'none' }}
            >
             Dashboard
       </Link>
  </div>
<div className="pbuttons">

<button
className="pbutton"
onClick={(event) => handleClick("architecture", event)}
style={{ borderColor: selected === "architecture" ? "white" : "" }}
>
  ARCHITECTURE
</button>
<button
className="pbutton"
onClick={(event) => handleClick("commercial", event)}
style={{ borderColor: selected === "commercial" ? "white" : "" }}
>
 COMMERCIAL
</button>
<button
className="pbutton"
onClick={(event) => handleClick("ecommerce", event)}
style={{ borderColor: selected === "ecommerce" ? "white" : "" }}
>
ECOMMERCE
</button>
<button
className="pbutton"
onClick={(event) => handleClick("fashion", event)}
style={{ borderColor: selected === "fashion" ? "white" : "" }}
>
FASHION
</button>
<button
className="pbutton"
onClick={(event) => handleClick("fine art", event)}
style={{ borderColor: selected === "fine art" ? "white" : "" }}
>
FINE ART
</button>
<button
className="pbutton"
onClick={(event) => handleClick("jewellery", event)}
style={{ borderColor: selected === "jewellery" ? "white" : "" }}
>
JEWELLERY
</button>
<button
className="pbutton"
onClick={(event) => handleClick("portrait", event)}
style={{ borderColor: selected === "portrait" ? "white" : "" }}
>
PORTRAIT
</button>
</div>
</div>

);
};

