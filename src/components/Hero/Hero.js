import React from "react";
import { Box, Button, Container, Slider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { findByLabelText } from "@testing-library/react";
import axios from "axios";
import { FormControlLabel, Input, InputLabel } from "@material-ui/core";

import "./loader.css";

export default function Hero() {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "80px",
    },
    boxes: {
      display: "flex",
    },
  }));

  const classes = useStyles();

  function sendData() {
    const order = {
      data: "Mahi mahi burgers",
    };
    axios
      .post("https://burgo-b046b.firebaseio.com/orders.json", order)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Typography variant="h2" color="textSecondary" gutterBottom>
          Material UI Library
        </Typography>
        <Typography variant="body1" color="primary">
          Tote bag knausgaard succulents. Prism pok pok mumblecore, copper mug
          vinyl tacos put a bird on it tumblr bitters. Raclette fixie cloud
          bread brunch godard locavore. Plaid roof party intelligentsia,
          affogato cornhole fixie lyft art party trust fund wayfarers chambray
          air plant post-ironic banh mi. Bespoke single-origin coffee mlkshk
          before they sold out coconut selvage.
        </Typography>
        <Button onClick={sendData}>Send Data</Button>
      </div>
      <div className="loader">Loading...</div>
    </Container>
  );
}
