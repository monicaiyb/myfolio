import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Grid, Button, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import {
  RemoveRedEyeRounded,
  FavoriteRounded,
  Share,
  Chat,
  // Email,
  // LinkedIn,
  // Twitter,
  // Facebook,
} from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import styles from "./ProjectImage.css";
// import {
//   // EmailShareButton,
//   // FacebookShareButton,
//   FacebookShareCount,
//   EmailIcon,
//   LinkedinIcon,
//   TwitterIcon,
//   FacebookIcon,
//   // LinkedinShareButton,
//   // TwitterShareButton,
//   // WhatsappShareButton,
// } from "react-share";

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
    showFullscreenButton: false,
    showPlayButton: false,
    slideDuration: 450,
    slideInterval: 2000,
    showNav: true,
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

  return (
    <div>
      <ImageGallery
        items={Images}
        {...properties}
        additionalClass={styles.image}
      />
      <Grid container spacing={3}>
        <Grid item className="viewProjectContainer">
          {/* <ColorButton
              variant="contained"
              color="secondary"
              className={classes.margin}
            > */}
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
          {/* </ColorButton> */}
          <Button onClick={() => addLike()}>
            <FavoriteRounded style={{ color: red[500], fontSize: 40 }} />
            <Typography style={{ color: red[1000], fontSize: 20 }}>
              {Likes}
            </Typography>
          </Button>
          <Button onClick={() => addShare()}>
            <Share
              style={{ color: red[500], fontSize: 40 }}
            />
            <Typography style={{ color: red[1000], fontSize: 20 }}>
              {Shares}
            </Typography>
          </Button>
          <Button onClick={() => addComment()}>
            <Chat
              style={{ color: red[500], fontSize: 40 }}
            />
            <Typography style={{ color: red[1000], fontSize: 20 }}>
              {Comments}
            </Typography>
          </Button>
          {/* <Button>
            <LinkedIn
              style={{ color: blue[600], fontSize: 50 }}
              className={classes.margin}
            />
          </Button>
          <Button>
            <Twitter
              style={{ color: blue[500], fontSize: 50 }}
              className={classes.margin}
            />
          </Button>
          <Button>
            <Facebook
              style={{ color: blue[800], fontSize: 50 }}
              className={classes.margin}
            />
          </Button> */}
          {/* <EmailIcon color={red} size={42} round={true} className={classes.margin} />
            <LinkedinIcon size={42} round={true} className={classes.margin}/>
            <TwitterIcon size={42} round={true} className={classes.margin}/>
            <FacebookIcon size={42} round={true} className={classes.margin}/>
            <FacebookShareCount url={"/"}>
              {(shareCount) => (
                <span className="myShareCountWrapper">{shareCount}</span>
              )}
            </FacebookShareCount> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectImage;
