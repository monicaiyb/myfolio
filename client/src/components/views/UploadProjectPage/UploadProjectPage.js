import React, { useState } from "react";
import Team from "./Team";
import Technology from "./Technology";

import { Container, Grid } from "@material-ui/core";
import { Typography, Button, Input } from "antd";
import Form from "react-bootstrap/Form";
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

function UploadProjectPage(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [CategoryValue, setCategoryValue] = useState(1);
  const [DateValue, setDateValue] = useState("");
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

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    // if (
    //   !TitleValue ||
    //   !CategoryValue ||
    //   !DateValue ||
    //   // !TechnologyValue ||
    //   !TeamValue ||
    //   !DescriptionValue ||
    //   !Images
    // ) {
    //   return alert("Fill all the fields first!");
    // }
    console.log(TeamValue);
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
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Project</Title>
        <hr />
      </div>

      <Grid container styling={{ marginHorizontal: "auto" }}>
        <Form onSubmit={onSubmit}>
          {/* DropZone */}
          <FileUpload refreshFunction={updateImages} />
          <br />
          <br />
          <label>
            <h3>Title</h3>
          </label>
          <Input onChange={onTitleChange} value={TitleValue} />
          <br />
          <br />
          <br />
          <Grid container spacing={2}>
            <Grid item s={12} md={6}>
              <label>
                <h3>Category</h3>
              </label>
              <select
                onChange={onCategoriesSelectChange}
                value={CategoryValue}
                style={{ paddingInline: 90 }}
              >
                {Categories.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item xs={12} md={6}>
              <label>
                <h3>Date of Completion</h3>
              </label>

              <Input onChange={onDateChange} value={DateValue} type="date" />
            </Grid>
          </Grid>
          <br />
          <br />

          <Grid container spacing={2}>
            <Grid item s={12} md={6} sx={{ p: 20 }}>
              <Team />
            </Grid>
            <Grid item xs={12} md={6}>
              <Technology />
            </Grid>
          </Grid>

          <label>
            <h3>Description</h3>
          </label>
          <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
          <br />
          <br />
          <Button onClick={onSubmit} type="danger">
            Submit
          </Button>
          <br />
          <br />
        </Form>
      </Grid>
    </Container>
  );
}

export default UploadProjectPage;
