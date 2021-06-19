import React from 'react';
const Logo = (props) => (
    <img
      alt="Logo"
      src={require("./neuwelt_logo.png")}
      width="100"
      height="10"
      {...props}
    />
  );
  
  export default Logo;