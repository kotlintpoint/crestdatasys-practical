import React from "react";

function SlickArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black rounded-xl`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default SlickArrow;
