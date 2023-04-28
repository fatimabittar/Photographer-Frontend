import React from "react";
import { Header } from "../../Header";
// import './AboutHeader.css'
// function AboutHeader() {
//   return (
//     <div>
//     <div className="about--header-parallax" >
//       <Header />
//     </div>

//   </div>
//   )
// }

// export default AboutHeader

function AboutHeader({ backgroundImage }) {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="about--header-parallax" style={style}>
        <Header />
      </div>
    </div>
  );
}

export default AboutHeader;
