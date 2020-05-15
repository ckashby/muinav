import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {
  AccessAlarm,
  ThreeDRotation,
  ArrowUpwardRounded,
} from "@material-ui/icons";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Blog from "./components/Blog/Blog";
import Card from "./components/Card/Card";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Container maxWidth="xl">
          <Header />
          <Hero />
          <Blog />
          <Card />
          <ContactForm />
          <Footer />
        </Container>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
