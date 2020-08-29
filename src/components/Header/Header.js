import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import {
  AccountBalance,
  AccessAlarmTwoTone,
  PhoneAndroid,
} from "@material-ui/icons";

import AdbOutlinedIcon from "@material-ui/icons/AdbOutlined";
import AirportShuttleOutlinedIcon from "@material-ui/icons/AirportShuttleOutlined";

export default function Header() {
  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton>
            <AirportShuttleOutlinedIcon color="secondary" />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <Link color="inherit" to="/">
              MaterialUI
            </Link>{" "}
            <IconButton>
              <AccessAlarmTwoTone color="secondary" />
            </IconButton>
            <Link to="/about">About</Link>
            <IconButton>
              <AccountBalance color="secondary" />{" "}
            </IconButton>
            <Link to="/contact">Contact</Link>
            <IconButton>
              <AdbOutlinedIcon color="secondary" />
            </IconButton>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
