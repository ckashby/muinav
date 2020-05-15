import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import UserPage from "../../pages/UserPage/UserPage";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/user/:id" component={UserPage} />
      </Switch>
    </main>
  );
};

export default Main;
