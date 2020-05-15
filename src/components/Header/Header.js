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
    <AppBar position="fixed" color="primary">
      <Container maxWidth="xl">
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
