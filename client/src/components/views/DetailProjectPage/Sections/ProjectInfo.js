import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function ProjectInfo(props) {
  const [Project, setProject] = useState({});

  useEffect(() => {
    setProject(props.detail);
  }, [props.detail]);

  // Loop through technologies and display in a list.
  const technology = [1, 2, 3, 4];
  // Project.technology;

  const listTechnologies = technology.map((item) =>
    <li>{item}</li>
  );

  // Loop through team and display in a list.
  const team = [1, 2, 3, 4];
  // Project.technology;

  const listTeam = team.map((member) =>
    <li>{member}</li>
  );


    return (
    <Box sx={{ flexGrow: 1 }}  style={{marginLeft:60}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            color="#EA0008"
            display="inline"
            sx={{ pl: 0, fontSize: "1.2rem" }}
            variant="body2"
          >
            <ArrowRightIcon fontSize="large" />
            {Project.categories}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align="left"
            color="textSecondary"
            display="inline"
            margin="0rem 0.5rem"
            sx={{ p: 1 }}
            gutterBottom
            variant="h5"
          >
            {Project.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align="left"
            color="tertiary"
            display="inline"
            margin="0rem 0.5rem"
            sx={{ pl: 1 }}
            gutterBottom
            variant="h6"
          >
            {Project.description}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align="left"
            color="textSecondary"
            display="inline"
            margin="0rem 0.5rem"
            sx={{ p: 1 }}
            gutterBottom
            variant="h5"
          >
            Technology
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align="left"
            color="tertiary"
            display="inline"
            margin="0rem 0.5rem"
            sx={{ pl: 1 }}
            gutterBottom
            variant="h6"
          >
            {listTechnologies}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align="left"
            color="textSecondary"
            display="inline"
            margin="0rem 0.5rem"
            sx={{ p: 1 }}
            gutterBottom
            variant="h5"
          >
            Team
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            align="left"
            color="tertiary"
            display="inline"
            margin="0rem 0.5rem"
            sx={{ pl: 1 }}
            gutterBottom
            variant="h6"
          >
            {listTeam}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectInfo;
