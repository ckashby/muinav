import React from "react";
import { Container, Slider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Hero() {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "80px",
    },
  }));

  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Typography variant="h2" color="textSecondary" gutterBottom>
          Material UI Demo
        </Typography>
        <Slider min="0" max="50" color="secondary" />
        <Typography variant="body1" color="primary">
          Tote bag knausgaard succulents. Prism pok pok mumblecore, copper mug
          vinyl tacos put a bird on it tumblr bitters. Raclette fixie cloud
          bread brunch godard locavore. Plaid roof party intelligentsia,
          affogato cornhole fixie lyft art party trust fund wayfarers chambray
          air plant post-ironic banh mi. Bespoke single-origin coffee mlkshk
          before they sold out cronut selvage.
        </Typography>
      </div>
    </Container>
  );
}
