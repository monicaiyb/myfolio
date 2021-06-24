import React from "react";

function ImageView(props) {
  const image = props.images[0];
  return (
    <div
    >
        <img
          style={{ width: "1% !important", maxHeight: "150px" }}
          src={`http://localhost:5000/${image}`}
          alt="projectImage"
        />
    </div>
  );
}

export default ImageView;
