import React from "react";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p> ©{(new Date().getFullYear())} Neuwelt | All rights reserved</p>
    </div>
  );
}

export default Footer;
