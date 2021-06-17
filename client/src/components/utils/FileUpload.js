import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";
import "./styles/FileUploadStyles.css";

function FileUpload(props) {
  const [Images, setImages] = useState([]);

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    //save the Image we chose inside the Node Server
    Axios.post("/api/project/uploadImage", formData, config).then(
      (response) => {
        if (response.data.success) {
          setImages([...Images, response.data.image]);
          props.refreshFunction([...Images, response.data.image]);
        } else {
          alert("Failed to save the Image in Server");
        }
      }
    );
  };

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div className="container1">
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div className="container2" {...getRootProps()}>
            {console.log("getRootProps", { ...getRootProps() })}
            {console.log("getInputProps", { ...getInputProps() })}
            <input {...getInputProps()} />
            <Icon type="plus" id="icon"/>
          </div>
        )}
      </Dropzone>

      <div className="imgContainer">
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)}>
            <img
              src={`http://localhost:5000/${image}`}
              alt={`projectImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
