import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Grid, Button, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import {
  RemoveRedEyeRounded,
  FavoriteRounded,
  Share,
  Chat,
  Email,
  LinkedIn,
  Twitter,
  Facebook,
  Link,
} from "@material-ui/icons";
import { red, blue } from "@material-ui/core/colors";
import styles from "./ProjectImage.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

function ProjectImage(props) {
  const [Images, setImages] = useState([]);
  const [ProjectLink, setProjectLink] = useState("");
  const [Likes, setLikes] = useState(0);
  const [Views, setViews] = useState(0);
  const [Shares, setShares] = useState(0);
  const [Comments, setComments] = useState(0);
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
  const addLike = () => {
    // eslint-disable-next-line no-const-assign
    setLikes(Likes + 1);
  };
  const addView = () => {
    // eslint-disable-next-line no-const-assign
    setViews(Views + 1);
  };
  const addShare = () => {
    // eslint-disable-next-line no-const-assign
    setShares(Shares + 1);
  };
  const addComment = () => {
    // eslint-disable-next-line no-const-assign
    setComments(Comments + 1);
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

  // const ColorButton = withStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //     color: theme.palette.getContrastText(red[500]),
  //     marginBottom: 300,
  //     borderRadius: 200,
  //     backgroundColor: red[500],
  //     "a:hover": {
  //       // color:#00A0C6,
  //       textDecoration: "none",
  //       // cursor:pointer;
  //     },
  //     "&:hover": {
  //       backgroundColor: red[700],
  //     },
  //   },
  // }))(Button);

  // const useStyles = makeStyles((theme) => ({
  //   margin: {
  //     margin: theme.spacing(1),
  //   },
  // }));
  // const classes = useStyles();

  const url = window.location.href;

  return (
    <div>
      <ImageGallery
        items={Images}
        {...properties}
        additionalClass={styles.image}
      />
      <Grid container spacing={3}>
        <Grid item className="viewProjectContainer">
          <Button onClick={() => addView()}>
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
              <RemoveRedEyeRounded
                style={{ color: red[500], fontSize: 40, mt: 40 }}
              />
            </a>
            <Typography style={{ color: red[1000], fontSize: 20 }}>
              {Views}
            </Typography>
          </Button>
          <Button onClick={() => addLike()}>
            <FavoriteRounded style={{ color: red[500], fontSize: 40 }} />
            <Typography style={{ color: red[1000], fontSize: 20 }}>
              {Likes}
            </Typography>
          </Button>
          <Popup
            trigger={
              <Button>
                <Share style={{ color: red[500], fontSize: 40 }} />
                <Typography style={{ color: red[1000], fontSize: 20 }}>
                  {Shares}
                </Typography>
              </Button>
            }
            position="right center"
          >
            <div>
              <Button
                style={{ textTransform: "none" }}
                onClick={() => addShare()}
              >
                <Email style={{ color: red[500], fontSize: 20 }} /> Share via
                Email
              </Button>
              <LinkedinShareButton
                style={{ textTransform: "none" }}
                title={url}
                onClick={() => addShare()}
              >
                <LinkedIn style={{ color: blue[600], fontSize: 20 }} /> Share on
                LinkedIn
              </LinkedinShareButton>
              <Button
                style={{ textTransform: "none" }}
                onClick={() => addShare()}
              >
                <Twitter style={{ color: blue[500], fontSize: 20 }} /> Share on
                Twitter
              </Button>
              {/* <Button style={{textTransform: "none"}} onClick={() => addShare()}> */}
              <FacebookShareButton
                quote={url}
                onClick={() => addShare()}
              >
                <Facebook style={{ color: blue[700], fontSize: 20 }} /> 
                Share on Facebook
              </FacebookShareButton>

              {/* </Button> */}
              {/* Copy current url to clipboard. */}
              <CopyToClipboard text={url}>
                <Button
                  style={{ textTransform: "none" }}
                  onClick={() => addShare()}
                >
                  <Link style={{ color: red[500], fontSize: 20 }} /> Copy Link
                </Button>
              </CopyToClipboard>
            </div>
          </Popup>

          <Popup
            trigger={
              <Button onClick={() => addComment()}>
                <Chat style={{ color: red[500], fontSize: 40 }} />
                <Typography style={{ color: red[1000], fontSize: 20 }}>
                  {Comments}
                </Typography>
              </Button>
            }
            position="bottom center"
          >
            <div>Popup content here !!</div>
          </Popup>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectImage;
