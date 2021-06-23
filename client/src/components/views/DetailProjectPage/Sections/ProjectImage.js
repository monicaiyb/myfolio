import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Grid, Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

function ProjectImage(props) {
  const [Images, setImages] = useState([]);
  const [ProjectLink, setProjectLink] = useState("");
  const properties = {
    showBullets: true,
    // showFullscreenButton: false,
    autoPlay: false,
    showThumbnails: true,
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
      margin: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <ImageGallery items={Images} {...properties} />
      <Grid
        item
        style={{
          margin: "auto",
        }}
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
              fontSize: 15,
              fontWeight: "bold",
              padding: "0rem 0.5rem",
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
