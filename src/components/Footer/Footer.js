import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      {/* <Container> */}
      <Toolbar>
        <Typography variant="body1" color="inherit">
          @copy; 2018 - 2020 AshbyTech
        </Typography>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
};

export default Footer;
