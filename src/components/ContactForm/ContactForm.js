import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // submit the form
    console.log("Aloha", name, email, age, message);
  };

  return (
    <div className={classes.container}>
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

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
          <Select
            native
            value={age}
            onChange={(e) => setAge(e.target.value)}
            label="Age"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
        <FormControl>
          <TextField id="select" label="New Age" value="20" select>
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
            <MenuItem value="30">Thirty</MenuItem>
            <MenuItem value="40">Forty</MenuItem>
          </TextField>
        </FormControl>
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
