import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import { categories } from "./Sections/Datas";
import SearchFeature from "./Sections/SearchFeature";

const { Meta } = Card;

function LandingPage() {
  const [Projects, setProjects] = useState([]);
  const [Skip, setSkip] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [Limit, setLimit] = useState(4);
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
    return (
      <Col lg={6} md={8} xs={24}>
        <Card
          hoverable={true}
          cover={
            <a href={`/project/${project._id}`}>
              {" "}
              <ImageSlider images={project.images} />
            </a>
          }
        >
          <Meta title={project.title} description={`${project.categories}`} />
          <Card>{project.date}</Card>
        </Card>
        <p>{project.title}</p>
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
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2> Projects </h2>
      </div>

      <Row gutter={[16, 16]}>
        {/* Filter  */}
        <Col lg={16} xs={24}>
          <CheckBox
            list={categories}
            handleFilters={(filters) => handleFilters(filters, "categories")}
          />
        </Col>
        {/* Search  */}

        <Col lg={8} xs={24}>
          <SearchFeature refreshFunction={updateSearchTerms} />
        </Col>
      </Row>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto",
        }}
      ></div>

      {Projects.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>No projects yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />

      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
