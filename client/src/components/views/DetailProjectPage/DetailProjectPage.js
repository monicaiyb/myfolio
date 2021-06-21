import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import Axios from "axios";

import ProjectImage from "./Sections/ProjectImage";
import ProjectInfo from "./Sections/ProjectInfo";

function DetailProjectPage(props) {
  const projectId = props.match.params.projectId;
  const [Project, setProject] = useState([]);

  useEffect(() => {
    Axios.get(`/api/project/projects_by_id?id=${projectId}&type=single`).then(
      (response) => {
        setProject(response.data[0]);
      }
    );
  }, [projectId]);

  return (
    <Container maxWidth="lg" style={{ marginTop: 40 }}>
      <Grid container style={{margin:"4rem 0rem 2rem 0rem"}}>
        <Grid item>
          <HomeIcon
            fontSize="large"
            sx={{
              //   ml: 1,
              //   mb: 0.8,
              color: "#fff000",
            }}
          />
        </Grid>
        <Grid item style={{margin:"0.2rem 0.6rem", fontSize:20}}>
        &gt; {Project.title}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ p: 20 }}>
          <ProjectImage detail={Project} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProjectInfo detail={Project} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default DetailProjectPage;
