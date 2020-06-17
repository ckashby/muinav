import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import { AccessAlarmTwoTone, PhoneAndroid } from "@material-ui/icons";

export default function Header() {
  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton>
            <PhoneAndroid color="secondary" />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Material UI Demo
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
