import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ContactForm() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // submit the form
    console.log("Aloha", name, email, message);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      <form noValidate autoComplete="off" className={classes.container}>
        <TextField
          label="Full Name"
          margin="normal"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // fullWidth
        />
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // fullWidth
        />
        <Select
          label="Age"
          value="age"
          onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>
        <TextField
          multiline
          rows="4"
          margin="normal"
          variant="outlined"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
        />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
