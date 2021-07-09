import React from "react";
import { Carousel } from "antd";

function ImageView(props) {
  const image = props.images[0];
  return (
    <div
    >
            <Carousel>
        <img
          style={{ width: "100% !important", maxHeight: "150px" }} // Changed width: 1% to 100%
          src={`http://localhost:5000/${image}`}
          alt="projectImage"
        />
              </Carousel>

    </div>
  );
}

export default ImageView;
