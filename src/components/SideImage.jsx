import React from "react";

export const SideImage = ({ imgSrc, className, width, height }) => {
  return (
    <div className="sidimg">
      <img
        src={`data:image/jpeg;base64,${imgSrc}`}
        alt="sideImage"
        className={className}
        width={width}
        height={height}
      />
    </div>
  );
};
