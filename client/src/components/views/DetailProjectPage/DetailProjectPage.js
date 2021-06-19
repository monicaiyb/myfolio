import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
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
    <Container maxWidth="md" style={{marginTop:40}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{p:20}}>
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