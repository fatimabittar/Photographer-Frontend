import React from "react";

export const SideImage = ({ imgSrc }) => {
  return (
    <div className="sidimg">
      <img
        src={`data:image/jpeg;base64,${imgSrc}`}
        alt="sideImage"
        className="side-image"
      />
    </div>
  );
};
