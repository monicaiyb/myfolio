import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function ProjectImage(props) {
  const [Images, setImages] = useState([]);
  const properties = {
    showBullets: true,
    // showFullscreenButton: false,
    autoPlay: true,
    showThumbnails:false,
  };

  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];
      props.detail.images &&
        props.detail.images.map((item) => {
          images.push({
            original: `http://localhost:5000/${item}`,
            thumbnail: `http://localhost:5000/${item}`
        });
        return props.detail.images;
        });
      setImages(images);
    }
  }, [props.detail]);

  return (
    <div>
      <ImageGallery items={Images} {...properties} />
    </div>
  );
}

export default ProjectImage;
