import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Row, Card } from "antd";
import { Container, Box, Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import ImageView from "../../utils/ImageView";
import CheckBox from "./Sections/CheckBox";
import { categories } from "./Sections/Datas";
import SearchFeature from "./Sections/SearchFeature";

function LandingPage() {
  const [Projects, setProjects] = useState([]);
  const [Skip, setSkip] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [Limit, setLimit] = useState(3); //Defines number of columns on landing page
  const [PostSize, setPostSize] = useState();
  const [SearchTerms, setSearchTerms] = useState("");

  // Filter projects by category.
  const [Filters, setFilters] = useState({
    categories: [],
  });

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProjects(variables);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProjects = (variables) => {
    Axios.post("/api/project/getProjects", variables).then((response) => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProjects([...Projects, ...response.data.projects]);
        } else {
          setProjects(response.data.projects);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("Failed to fectch project data.");
      }
    });
  };

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      filters: Filters,
      searchTerm: SearchTerms,
    };
    getProjects(variables);
    setSkip(skip);
  };

  const renderCards = Projects.map((project, index) => {
    const categoryNo = project.categories;
    let category;
    // const team = project.team;
    // const technology = Project.technology;
    // console.log(team[0]);

    // Map category number to value.
    if (categoryNo === 1) {
      category = "Creative Design";
    } else if (categoryNo === 2) {
      category = "Digital Marketing";
    } else if (categoryNo === 3) {
      category = "Websites";
    } else if (categoryNo === 4) {
      category = "Software";
    }

    return (
      <Col  md={8} sm={12} xs={24}>
        <a href={`/project/${project._id}`}>
          <Card
          className = "cardStyles"
            hoverable={true}
            bordered = {false}
            cover={<ImageView images={project.images}></ImageView>}
          >
            <Row style={{ margin: "0rem" }}>
              <Col md={16} pr={100}>
                <Box>
                  <Typography
                    color="secondary"
                    display="inline"
                    sx={{ ml: 0, fontSize: 2 }}
                  >
                    {category}
                    <ArrowRightIcon />
                  </Typography>
                </Box>
              </Col>
              <Col md={8}>
                <div className="dateStyles" >
                  <Typography
                  >
                    {project.date}
                  </Typography>
                </div>
              </Col>
            </Row>
          </Card>
        </a>
        <Typography
          class="card_project_title"          
        >
          {project.title}
        </Typography>
      </Col>
    );
  });

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getProjects(variables);
    setSkip(0);
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    console.log(newFilters);

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };

    setSkip(0);
    setSearchTerms(newSearchTerm);

    getProjects(variables);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 0 }}>
      <Row gutter={[16, 16]}>
        
        {/* Filter  */}
        <Col lg={16} md={12} sm={12} xs={24}>
          <CheckBox
            list={categories}
            handleFilters={(filters) => handleFilters(filters, "categories")}
          />
        </Col>

        {/* Search  */}
        <Col lg={8} md={12} sm={12} xs={24}>
          <SearchFeature refreshFunction={updateSearchTerms} />
        </Col>
      </Row>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto",
        }}
      >
      </div>

      {Projects.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Projects Loading...</h2>
        </div>
      ) : (
      
          <Row gutter={[16, 16]}>{renderCards}</Row>
        
      )}
          
      <Row
      style={{
        margin: "20px 0",
        display: "block"}}
      >
      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
      </Row>
    </Container>
  );
}

export default LandingPage;
