import React from "react";
import { Carousel } from "antd";

function ImageView(props) {
  const image = props.images[0];
  return (
    <div
    >
            <Carousel>
        <img
          style={{ width: "1% !important", maxHeight: "150px" }}
          src={`http://localhost:5000/${image}`}
          alt="projectImage"
        />
              </Carousel>

    </div>
  );
}

export default ImageView;
