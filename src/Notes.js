<Button variant="contained" color="primary">
            Click me
          </Button>
          <IconButton>
            Set Alarm <AccessAlarm />
          </IconButton>
          <IconButton>
            Notifications <ArrowUpwardRounded />
          </IconButton>
          <IconButton>
            3-D <ThreeDRotation />
          </IconButton>


//Header.js ----------------------------------------------
import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import { AccessAlarmTwoTone } from "@material-ui/icons";

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Material UI Demo
          </Typography>

          {/* <IconButton color="inherit">
            Set Alarm <AccessAlarmTwoTone />
          </IconButton> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}


// Hero.js ---------------------------------------------
import React from "react";
import { Container, Typography } from "@material-ui/core";
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
        <Typography variant="body1" color="primary">
          Hero Component text goes here...
        </Typography>
      </div>
    </Container>
  );
}


// Blog ---------------------------
