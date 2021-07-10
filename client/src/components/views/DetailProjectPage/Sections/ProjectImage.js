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

  const addEmailShare = () => {
    alert("Shareable link has been copied to the clipboard.");
    window.open("https://www.google.com/");
    setShares(Shares + 1);
  };
  const addLinkedinShare = () => {
    alert("Shareable link has been copied to the clipboard.");
    window.open("https://www.google.com/");
    setShares(Shares + 1);
  };
  const addTwitterShare = () => {
    alert("Shareable link has been copied to the clipboard.");
    window.open("https://twitter.com/");
    setShares(Shares + 1);
  };
  const addFacebookShare = () => {
    alert("Shareable link has been copied to the clipboard.");
    window.open("https://www.facebook.com/");
    setShares(Shares + 1);
  };
  const addClipboardShare = () => {
    alert("Shareable link has been copied to the clipboard.");
    setShares(Shares + 1);
  };
  const addComment = () => {
    alert("Shareable link has been copied to the clipboard.");
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
              <CopyToClipboard text={url}>
                <Button
                  style={{ textTransform: "none" }}
                  onClick={() => addEmailShare()}
                >
                  <Email style={{ color: red[500], fontSize: 20 }} />{"  "}Share via
                  Email
                </Button>
              </CopyToClipboard>
              <CopyToClipboard text={url}>
                <Button
                  style={{ textTransform: "none" }}
                  onClick={() => addLinkedinShare()}
                >
                  <LinkedIn style={{ color: blue[600], fontSize: 20 }} />{"  "}Share
                  on LinkedIn
                </Button>
              </CopyToClipboard>

              <CopyToClipboard text={url}>
                <Button
                  style={{ textTransform: "none" }}
                  onClick={() => addTwitterShare()}
                >
                  <Twitter style={{ color: blue[500], fontSize: 20 }} />{"  "}Share
                  on Twitter
                </Button>
              </CopyToClipboard>
              {/* <Button style={{textTransform: "none"}} onClick={() => addShare()}> */}
              <CopyToClipboard text={url}>
                <Button
                  style={{ textTransform: "none" }}
                  onClick={() => addFacebookShare()}
                >
                  <Facebook style={{ color: blue[700], fontSize: 20 }} />{"  "}Share on Facebook
                </Button>
              </CopyToClipboard>
              {/* </Button> */}
              {/* Copy current url to clipboard. */}
              <CopyToClipboard text={url}>
                <Button
                  style={{ textTransform: "none" }}
                  onClick={() => addClipboardShare()}
                >
                  <Link style={{ color: red[500], fontSize: 20 }} />{"  "}Copy Link
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
