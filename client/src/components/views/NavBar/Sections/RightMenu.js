/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
// import CustomizedButtons from "./BackButton";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";

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

function RightMenu(props) {
  const user = useSelector((state) => state.user);
  const classes = useStyles();

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="back">
          <ColorButton
            variant="contained"
            color="secondary"
            className={classes.margin}
          >
            <a href="/" style={{textDecoration:'none !important', color:"#fff", fontSize:15, fontWeight:"bold", padding:'0rem 1.5rem'}}>BACK</a>
          </ColorButton>
        </Menu.Item>
        {/* <Menu.Item key="mail">
          <a href="/login">Login</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Signup</a>
        </Menu.Item> */}
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="dashboard">
          <a href="/admin">Dashboard</a>
        </Menu.Item>

        <Menu.Item key="upload">
          <a href="/project/upload">Upload</a>
        </Menu.Item>

        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
