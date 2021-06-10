import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import FileUpload from "../../utils/FileUpload";
const { Title } = Typography;
const { TextArea } = Input;
const Categories = [
  { key: 1, value: "Software" },
  { key: 2, value: "Websites" },
  { key: 3, value: "Digital Marketing" },
  { key: 4, value: "Consultancy" },
];

function UploadProjectPage() {
  const [setTitleValue] = useState("");
  const [ setDescriptionValue] = useState("");
  const [setPriceValue] = useState(0);
  const [setCategoryValue] = useState(1);

  const onTitleChange = (e) => {
    setTitleValue(e.currentTarget.value);
  };
  const onDescriptionChange = (e) => {
    setDescriptionValue(e.currentTarget.value);
  };
  const onPriceChange = (e) => {
    setPriceValue(e.currentTarget.value);
  };
  const onCategorySelectChange = (e) => {
    setCategoryValue(e.currentTarget.value);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", margin: "2rem" }}>
        <Title level={2}>Upload Project</Title>
      </div>
      <Form action="" onSubmit>
        {/* DropZone */}
        <FileUpload />
        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value />
        <br />
        <br />
        <label>Description</label>
        <TextArea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={onDescriptionChange}
          value
        ></TextArea>
        <br />
        <br />
        <label htmlFor="">Price($)</label>
        <Input type="number" onChange={onPriceChange} value />
        <br />
        <br />
        <select name="" id="" onChange={onCategorySelectChange}>
          {Categories.map((item) => {
            return (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProjectPage;
