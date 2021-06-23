import React, { useEffect, useState } from "react";
import { Container, Grid, Box, Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

import HomeIcon from "@material-ui/icons/Home";
// import ListIcon from "@material-ui/icons/List";
import Axios from "axios";

import ProjectImage from "./Sections/ProjectImage";
import ProjectInfo from "./Sections/ProjectInfo";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    marginBottom: 300,
    borderRadius: 200,
    backgroundColor: red[500],
    "a:hover": {
      // color:#00A0C6,
      textDecoration: "none",
      // cursor:pointer;
    },
    "&:hover": {
      backgroundColor: red[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function DetailProjectPage(props) {
  const projectId = props.match.params.projectId;
  const [Project, setProject] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    Axios.get(`/api/project/projects_by_id?id=${projectId}&type=single`).then(
      (response) => {
        setProject(response.data[0]);
      }
    );
  }, [projectId]);

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

  return (
    <Container maxWidth="lg" style={{ marginTop: 40 }}>
      <Grid container spacing={2} style={{ margin: "4rem 0rem 2rem 0rem" }}>
        <Box display="flex">
          <Grid item>
            <HomeIcon
              fontSize="large"
              sx={{
                ml: 1,
                mb: 0.8,
                color: "danger",
              }}
            />
          </Grid>
          <Grid
            item
            style={{
              margin: "0.2rem 0.6rem",
              fontSize: 20,
              paddingRight: "2rem",
            }}
          >
            &gt; {category}
          </Grid>

          <Grid
            item
            style={{
              margin: "-0.2rem 23.5rem",
            }}
          >
            <ColorButton
              variant="contained"
              color="secondary"
              className={classes.margin}
            >
              <a
                href={`${Project.projectLink}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none !important",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: "bold",
                  padding: "0rem 0.5rem",
                }}
              >
                VIEW PROJECT
              </a>
            </ColorButton>
          </Grid>
        </Box>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ p: 20 }}>
          <ProjectImage detail={Project} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid item>
            <ProjectInfo detail={Project} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DetailProjectPage;
