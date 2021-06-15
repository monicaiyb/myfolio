import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const Categories = [
  { key: 1, value: "Creative Design" },
  { key: 2, value: "Digital Marketing" },
  { key: 3, value: "Websites" },
  { key: 4, value: "Software" },
];

const Technology = [
  { key: 1, value: "Adobe Photoshop" },
  { key: 2, value: "Adobe Indesign" },
  { key: 3, value: "Adobe XD" },
  { key: 4, value: "WordPress" },
  { key: 5, value: "Javascript" },
];

const Team = [
  { key: 1, value: "Isaac" },
  { key: 2, value: "Simon" },
  { key: 3, value: "Paula" },
  { key: 4, value: "Ivan" },
  { key: 5, value: "Hilda" },
  { key: 6, value: "Samuel" },
];

function UploadProjectPage(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [CategoryValue, setCategoryValue] = useState(1);
  const [DateValue, setDateValue] = useState("");
  const [TechnologyValue, setTechnologyValue] = useState(1);
  const [TeamValue, setTeamValue] = useState(1);
  const [DescriptionValue, setDescriptionValue] = useState("");

  const [Images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onCategoriesSelectChange = (event) => {
    setCategoryValue(event.currentTarget.value);
  };

  const onDateChange = (event) => {
    setDateValue(event.currentTarget.value);
  };

  const onTechnologySelectChange = (event) => {
    setTechnologyValue(event.currentTarget.value);
  };
  const onTeamSelectChange = (event) => {
    setTeamValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (
      !TitleValue ||
      !CategoryValue ||
      !DateValue ||
      !TechnologyValue ||
      !TeamValue ||
      !DescriptionValue ||
      !Images
    ) {
      return alert("Fill all the fields first!");
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      categories: CategoryValue,
      date: DateValue,
      technology: TechnologyValue,
      team: TeamValue,
      description: DescriptionValue,
      images: Images,
    };

    Axios.post("/api/project/uploadProject", variables).then((response) => {
      if (response.data.success) {
        alert("Project Successfully Uploaded");
        props.history.push("/");
      } else {
        alert("Failed to upload Project");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Project</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/* DropZone */}
        <FileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
        <br />
        <br />
        <label>Price($)</label>
        <Input onChange={onDateChange} value={DateValue} type="date" />
        <br />
        <br />
        <select onChange={onCategoriesSelectChange} value={CategoryValue}>
          {Categories.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />
        <br />

        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProjectPage;
