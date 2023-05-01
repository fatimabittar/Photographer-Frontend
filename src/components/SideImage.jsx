import React from "react";

export const SideImage = ({ index, image, className, width, height, imageWidth = '100%' , containerWidth = '100%' }) => {
  return (
    // <div className="sidimg" key={index} width={imageWidth}>
      <img
        src={`data:image/jpeg;base64,${image}`}
        alt="sideImage"
        className={className}
        style={{ width: `calc(${containerWidth} - 0px)`, aspectRatio: `${width}/${height}`, height: "auto" }}
      />
    // </div>
  );
};
