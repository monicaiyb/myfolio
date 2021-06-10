import React, {useState} from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";

function FileUpload(props) {
  const [Images, setImages] = useState([])
  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    // Save the image chosen into the Node Server.
    Axios.post("/api/project/uploadImage", formData, config).then((response) => {
      if (response.data.success) {
        // Save multiple images.
        setImages([...Images, response.data.image])
        props.refereshFunction([...Images, response.data.image])
      } else {
        alert("Failed to save the image in server.");
      }
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "300px",
              height: "240px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            <input {...getRootProps()} />
            <Icon type="plus" style={{ fontSize: "3rem" }} />
          </div>
        )}
      </Dropzone>
      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        <div onClick>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
