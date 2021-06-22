import React, { useState } from "react";
import { team, technology } from "./data/data";
// import Team from "./Team";
// import Technology from "./Technology";

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
  const [TechnologyValue, setTechnologyValue] = useState("");
  const [TeamValue, setTeamValue] = useState("");

  /* Team */
  const [checkedTeam, setCheckedTeam] = useState(
    new Array(team.length).fill(false)
  );

  const handleOnChangeTeam = (position) => {
    const updatedCheckedTeam = checkedTeam.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedTeam(updatedCheckedTeam);

    const totalPrice = updatedCheckedTeam.reduce((sum, currentTeam, index) => {
      if (currentTeam === true) {
        return sum + `${team[index].name},`;
      }
      return sum;
    }, "");
    setTeamValue(totalPrice);
    // var nameArr = totalPrice.split(",");
    // console.log(nameArr);
  };

  /*Technology*/
  const [checkedTechnology, setCheckedTechnology] = useState(
    new Array(technology.length).fill(false)
  );

  const handleOnChangeTechnology = (position) => {
    const updatedCheckedTechnology = checkedTechnology.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedTechnology(updatedCheckedTechnology);

    const totalPrice = updatedCheckedTechnology.reduce(
      (sum, currentTechnology, index) => {
        if (currentTechnology === true) {
          return sum + `${technology[index].name},`;
        }
        return sum;
      },
      ""
    );
    setTechnologyValue(totalPrice);
    // var nameArr = totalPrice.split(",");
    // console.log(nameArr);
  };

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
              <div className="App">
                <h3>Team Involved</h3>
                <ul className="team-list">
                  {team.map(({ name }, index) => {
                    return (
                      <p key={index}>
                        <div className="team-list-item">
                          <div className="left-section">
                            <input
                              type="checkbox"
                              id={`custom-checkbox-${index}`}
                              name={name}
                              value={name}
                              checked={checkedTeam[index]}
                              onChange={() => handleOnChangeTeam(index)}
                            />
                            <label htmlFor={`custom-checkbox-${index}`}>
                              {" "}
                              {name}
                            </label>
                          </div>
                        </div>
                      </p>
                    );
                  })}
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="App">
                <h3>Technologies Used</h3>
                <ul className="technology-list">
                  {technology.map(({ name }, index) => {
                    return (
                      <p key={index}>
                        <div className="technology-list-item">
                          <div className="left-section">
                            <input
                              type="checkbox"
                              id={`custom-checkbox-${index}`}
                              name={name}
                              value={name}
                              checked={checkedTechnology[index]}
                              onChange={() => handleOnChangeTechnology(index)}
                            />
                            <label htmlFor={`custom-checkbox-${index}`}>
                              {" "}
                              {name}
                            </label>
                          </div>
                        </div>
                      </p>
                    );
                  })}
                </ul>
              </div>
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
