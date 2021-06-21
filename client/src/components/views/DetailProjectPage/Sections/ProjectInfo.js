import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function ProjectInfo(props) {
  const [Project, setProject] = useState({});

  useEffect(() => {
    setProject(props.detail);
  }, [props.detail]);

  // Loop through technologies and display in a list.
  const technology = [];
  // Project.technology;
  const techNo = Project.technology;
  let techValue;
  // Map technology number to value.
  if (techNo === 1) {
    techValue = "Adobe Photoshop";
  } else if (techNo === 2) {
    techValue = "WordPress";
  } else if (techNo === 3) {
    techValue = "Javascript";
  }

  technology.push(techValue);

  const listTechnologies = technology.map((item) => <li>{item}</li>);

  // Loop through team and display in a list.
  const team = [1, 2, 3, 4];
  // Project.technology;

  const listTeam = team.map((member) => <li>{member}</li>);

  const categoryNo = Project.categories;
  let category;
  // Map categorynology number to value.
  if (categoryNo === "1") {
    category = "Creative Design";
  } else if (categoryNo === "2") {
    category = "Digital Marketing";
  } else if (categoryNo === "3") {
    category = "Websites";
  } else if (categoryNo === "4") {
    category = "Software";
  }

  return (
    <div>
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
        <Grid item style={{ margin: "0.5rem 0rem",}}>
          <Typography
            color="#EA0008"
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
    </div>
  );
}

export default ProjectInfo;
