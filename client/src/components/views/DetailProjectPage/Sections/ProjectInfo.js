import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function ProjectInfo(props) {
  const [Project, setProject] = useState({});

  useEffect(() => {
    setProject(props.detail);
  }, [props.detail]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            color="#EA0008"
            display="inline"
            sx={{ pl: 0, fontSize: "1.2rem" }}
            variant="body2"
          >
            <ArrowRightIcon fontSize="large" />
            {Project.categories}
            {/* {state} */}
          </Typography>
        </Grid>
      </Grid>
    </Box>

    // <div className="col-6">
    //   <Grid
    //     item
    //     sx={{
    //       alignItems: "center",
    //       display: "flex",
    //     }}
    //   >
    //     <Typography
    //       color="#EA0008"
    //       display="inline"
    //       sx={{ pl: 0, fontSize: "1.2rem" }}
    //       variant="body2"
    //     >
    //       <ArrowRightIcon fontSize="large" />
    //       {Project.categories}
    //       {/* {state} */}
    //     </Typography>
    //   </Grid>

    //   <Grid
    //     item
    //     sx={{
    //       alignItems: "center",
    //       display: "flex",
    //     }}
    //   >
    //     <Typography
    //       align="left"
    //       color="textSecondary"
    //       display="inline"
    //       margin="0rem 0.5rem"
    //       sx={{ p: 1 }}
    //       gutterBottom
    //       variant="h5"
    //     >
    //       {Project.title}
    //     </Typography>
    //   </Grid>

    //   <Grid
    //     item
    //     sx={{
    //       alignItems: "center",
    //       display: "flex",
    //     }}
    //   >
    //     <Typography
    //       align="left"
    //       color="tertiary"
    //       display="inline"
    //       margin="0rem 0.5rem"
    //       sx={{ pl: 1 }}
    //       gutterBottom
    //       variant="h6"
    //     >
    //       {Project.description}
    //     </Typography>
    //   </Grid>

    //   <Grid
    //     item
    //     sx={{
    //       alignItems: "center",
    //       display: "flex",
    //     }}
    //   >
    //     <Typography
    //       align="left"
    //       color="textSecondary"
    //       display="inline"
    //       margin="0rem 0.5rem"
    //       sx={{ p: 1 }}
    //       gutterBottom
    //       variant="h5"
    //     >
    //       Technology
    //     </Typography>
    //   </Grid>

    //   <Grid
    //     item
    //     sx={{
    //       alignItems: "center",
    //       display: "flex",
    //     }}
    //   >
    //     <Typography
    //       align="left"
    //       color="tertiary"
    //       display="inline"
    //       margin="0rem 0.5rem"
    //       sx={{ pl: 1 }}
    //       gutterBottom
    //       variant="h6"
    //     >
    //       <ul>
    //         <li>{Project.technology}</li>
    //       </ul>
    //     </Typography>
    //   </Grid>
    //   <Grid
    //     item
    //     sx={{
    //       alignItems: "center",
    //       display: "flex",
    //     }}
    //   >
    //     <Typography
    //       align="left"
    //       color="textSecondary"
    //       display="inline"
    //       margin="0rem 0.5rem"
    //       sx={{ p: 1 }}
    //       gutterBottom
    //       variant="h5"
    //     >
    //       Team
    //     </Typography>
    //   </Grid>

    //   <Grid
    //     item
    //     sx={{
    //       alignItems: "center",
    //       display: "flex",
    //     }}
    //   >
    //     <Typography
    //       align="left"
    //       color="tertiary"
    //       display="inline"
    //       margin="0rem 0.5rem"
    //       sx={{ pl: 1 }}
    //       gutterBottom
    //       variant="h6"
    //     >
    //       <ul>
    //         <li>{Project.team}</li>
    //       </ul>
    //     </Typography>
    //   </Grid>
    // </div>
    // </div>
  );
}

export default ProjectInfo;
