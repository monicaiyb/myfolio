import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import styles from "./ProjectImage.css";

function ProjectImage(props) {
  const [Images, setImages] = useState([]);
  const [ProjectLink, setProjectLink] = useState("");
  const properties = {
    showBullets: true,
    showThumbnails: true,
    showFullscreenButton: true,
    showPlayButton: false,
    slideDuration: 450,
    slideInterval: 2000,
    showNav: false,
    // autoPlay: false,
  };

  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];
      props.detail.images &&
        props.detail.images.map((item) => {
          images.push({
            original: `http://localhost:5000/${item}`,
            thumbnail: `http://localhost:5000/${item}`,
          });
          return props.detail.images;
        });
      setImages(images);
      setProjectLink(props.detail.projectLink);
    }
  }, [props.detail]);

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[500]),
      borderRadius: 100,
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
      margin: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <ImageGallery
        items={Images}
        {...properties}
        additionalClass={styles.image}
      />
      {/* <Typography
              align="left"
              color="tertiary"
              display="inline"
              margin="0rem 0.5rem"
              sx={{ pl: 1 }}
              gutterBottom
            >
              20.06.2021
      </Typography> */}
      
      <Grid
        item
        className="viewProjectContainer"
      >
        <ColorButton
          variant="contained"
          color="secondary"
          className={classes.margin}
        >
          <a
            href={`${ProjectLink}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none !important",
              color: "#fff",
              fontSize: 10,
              fontWeight: "bold",
              padding: "0rem 0.2rem",
            }}
          >
            VIEW PROJECT
          </a>
        </ColorButton>
      </Grid>
    </div>
  );
}

export default ProjectImage;
