import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function ProjectInfo(props) {
  const [Project, setProject] = useState({});
  // const [Technology, setTechnology] = useState("");
  // const [Team, setTeam] = useState("");

  useEffect(() => {
    setProject(props.detail);
  }, [props.detail]);
  let category;

  // useEffect(() => {
  //   setTechnology(props.tech);
  // }, [props.tech]);

  // useEffect(() => {
  //   setTeam(props.team);
  // }, [props.team]);

  // const technologyArr = Technology.split(",");
  // const teamArr = Team.split(",");

  // const listTechnologies = technologyArr.map((tech) => <p>{tech}</p>);
  // const listTeam = teamArr.map((member) => <p>{member}</p>);
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
              {/* {listTeam} */}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProjectInfo;
