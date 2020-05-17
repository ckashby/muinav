// -------------------------------------------  formElements.js
// https://medium.com/craft-academy/create-a-dynamic-form-in-react-using-hooks-f64cfabaeaaa


const fields = {
  firstName: { type: "text", name: "firstName", text: "First Name", placeholder: 'Jack', required: true },
  lastName: { type: "text", name: "lastName", text: "Last Name", placeholder: 'Doe', required: true },
  email: { type: "email", name: "email", text: "Email", placeholder: 'jack@mail.com', required: true },
  addressLine: { type: "text", name: "addressLine", text: "Address Line", placeholder: 'Awesome str 9', required: true },
  postalCode: { type: "text", name: "postalCode", text: "Postal Code", placeholder: '12345', required: true },
  city: { type: "text", name: "city", text: "City", placeholder: 'Gothenburg', required: true },
  state: { type: "text", name: "state", text: "State", placeholder: 'Gotaland', required: true },
  dob: { type: "date", name: "dob", text: "Date of Birth", required: true },
  password: { type: "password", name: "password", text: "Password", required: true },
  passwordConfrimation: { type: "password", name: "passwordConfirmation", text: "Password Confirmation", required: true }
}

export const registerForm = [
  fields.firstName,
  fields.lastName,
  fields.email,
  fields.addressLine,
  fields.postalCode,
  fields.state,
  fields.dob,
  fields.password,
  fields.passwordConfrimation
];

export const loginForm = [
  fields.email,
  fields.password
];

// -------------------------------------------  FormComp.js
import React from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import classes from "./Form.module.css";

const Form = ({
  formStructure,
  formData,
  setFormData,
  formTitle,
  buttonText,
  onSubmit
}) => {
  const handleChange = event => {
    const formDataCopy = { ...formData };
    formDataCopy[event.target.name] = event.target.value;
    setFormData(formDataCopy);
  };
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <h2>{formTitle}</h2>
      {formStructure.map(f => (
        <Input
          key={f.name}
          type={f.type}
          name={f.name}
          id={f.id}
          text={f.text}
          handleChange={handleChange}
          placeholder={f.placeholder}
          required={f.required}
        />
      ))}
      <Button buttonType='primary' text={buttonText} />
    </form>
  );
};

export default Form;

// ------------------------------------------- AuthenticationForm.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Form from "../../UI/Form/Form";
import {
  registerUser,
  signInUser
} from "../../store/config/redux-token-auth-config";

const AuthenticationForm = props => {
  const [formData, setFormData] = useState({});
  const action = data => {
    switch (props.action) {
      case "register":
        return props.registerUser(data);
      case "login":
        return props.signInUser(data);
      default:
        console.log("Something went wrong");
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    action(formData)
      .then(() => {
        props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Form
      onSubmit={onSubmit}
      formTitle={props.formTitle}
      setFormData={setFormData}
      formStructure={props.formStructure}
      formData={formData}
      buttonText={props.buttonText}
    />
  );
};

export default connect(
  null,
  { registerUser, signInUser }
)(withRouter(AuthenticationForm));


// -----------------------------------------App.js

import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import { registerForm, loginForm } from "./UI/Form/formElements";

const Fruits = lazy(() => import("./components/Fruits/Fruits"));
const AuthenticationForm = lazy(() =>
  import("./components/AuthenticationForm/AuthenticationForm")
);

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route exact path="/" render={() => <Fruits />} />
          <Route
            exact
            path="/register"
            render={() => (
              <AuthenticationForm
                action="register"
                formTitle="Registration"
                buttonText="Register"
                formStructure={registerForm}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <AuthenticationForm
                action="login"
                formTitle="Login"
                buttonText="Login"
                formStructure={loginForm}
              />
            )}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;

// ------------------------ layout.module.css

.container {
  max - width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}

.header {
  display: flex;
  flex - direction: column;
  align - items: center;
}

.headerImage {
  width: 6rem;
  height: 6rem;
}

.headerHomeImage {
  width: 8rem;
  height: 8rem;
}

.backToHome {
  margin: 3rem 0 0;
}


// ------------------------------  styles/utils.module.css

.heading2Xl {
  font - size: 2.5rem;
  line - height: 1.2;
  font - weight: 800;
  letter - spacing: -0.05rem;
  margin: 1rem 0;
}

.headingXl {
  font - size: 2rem;
  line - height: 1.3;
  font - weight: 800;
  letter - spacing: -0.05rem;
  margin: 1rem 0;
}

.headingLg {
  font - size: 1.5rem;
  line - height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font - size: 1.2rem;
  line - height: 1.5;
}

.borderCircle {
  border - radius: 9999px;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding - top: 1px;
}

.list {
  list - style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  color: #999;
}

// ------------------------------  styles/utils.module.css








// -------------------------------------------
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
