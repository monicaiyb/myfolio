import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function ProjectInfo(props) {
  const [Project, setProject] = useState({});

  useEffect(() => {
    setProject(props.detail);
  }, [props.detail]);

  const categoryNo = Project.categories;
  let category;
  // Map categorynology number to value.
  if (categoryNo === 1) {
    category = "Creative Design";
  } else if (categoryNo === 2) {
    category = "Digital Marketing";
  } else if (categoryNo === 3) {
    category = "Websites";
  } else if (categoryNo === 4) {
    category = "Software";
  }
  // const techMe = Project.technology;

  // const technologyArr = techMe.split(",");
  // const teamArr = Team.split(",");

  // const listTechnologies = technologyArr.map((tech) => <p>{tech}</p>);
  // const listTeam = teamArr.map((member) => <p>{member}</p>);
  return (
    <div style={{ margin: "0rem 0rem 5rem 0rem" }}>
      <Grid container>
        <Grid item>
          <ArrowRightIcon
            fontSize="large"
            sx={{
              // ml: -11,
              // mb: 0.8,
              color: "#fff000",
            }}
          />
        </Grid>
        <Grid item style={{ margin: "0.5rem 0rem" }}>
          <Typography
            color="secondary"
            display="inline"
            sx={{ ml: 0, fontSize: 60 }}
          >
            {category}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1 }} style={{ marginLeft: 60 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              align="left"
              color="secondary"
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
              color="secondary"
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
              {Project.technology}
              {/* {listTechnologies} */}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="left"
              color="secondary"
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
              {Project.team}
              {/* {listTeam} */}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="left"
              color="secondary"
              display="inline"
              margin="0rem 0.5rem"
              sx={{ p: 1 }}
              gutterBottom
              variant="h5"
            >
             Project Date
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
              {Project.date}
              {/* {listTeam} */}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProjectInfo;
