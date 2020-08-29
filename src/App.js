import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Button, Container, IconButton, Typography } from "@material-ui/core";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

// import HomePage from "./pages/HomePage/HomePage";
// import UserPage from "./pages/UserPage/UserPage";
import RootPage from "./pages/RootPage/RootPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Container>
          <Route path="/" exact component={RootPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Header />
          <Hero />
          <Footer />
        </Container>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
