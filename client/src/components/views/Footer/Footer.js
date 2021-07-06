import React from "react";
import { Container, Typography, Divider } from "@material-ui/core";

function Footer(props) {
  return (
    <div
      elevation={2}
      style={{
        textAlign: "center",
        bottom: 0,
        width: "100% !important",
        height: "1rem !important",
        paddingBottom: "1rem",
        background: "#F0F0F0",
      }}
    >
      <Container maxWidth="md">
        <Divider style={{ background: "black" }} variant="middle" />
        <Typography
          style={{
            justifyContent: "left",
            display: "flex",
            margin: "1rem",
          }}
        >
          ©{new Date().getFullYear()} Neuwelt | All rights reserved
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
