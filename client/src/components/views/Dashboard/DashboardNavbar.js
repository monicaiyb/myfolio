// import React from "react";
// import { Link as RouterLink } from "react-router-dom";
// import PropTypes from "prop-types";
// import {
//   AppBar,
//   Box,
//   Hidden,
//   IconButton,
//   Toolbar,
//   Typography,
// } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// // import InputIcon from "@material-ui/icons/Input";
// // import AddProject from "./project/ProjectModalForm";

// import Logo from "./Logo";

// const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
//   return (
//     <AppBar elevation={0} {...rest}>
//       <Toolbar>
//         <RouterLink to="/">
//           <Logo />
//         </RouterLink>
//         <Typography> </Typography>
//         <Box sx={{ flexGrow: 1 }} />
//         <Hidden lgDown>
//           <IconButton color="inherit">
//             {/* <AddProject/> */}
//             {/* <InputIcon /> */}
//           </IconButton>
//         </Hidden>
//         <Hidden lgUp>
//           <IconButton color="inherit" onClick={onMobileNavOpen}>
//             {/* <AddProject /> */}
//             <MenuIcon />
//           </IconButton>
//         </Hidden>
//       </Toolbar>
//     </AppBar>
//   );
// };

// DashboardNavbar.propTypes = {
//   onMobileNavOpen: PropTypes.func,
// };

// export default DashboardNavbar;
