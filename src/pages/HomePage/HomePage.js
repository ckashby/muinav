import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService/UserService";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };

    this.userService = new UserService();
  }

  componentDidMount() {
    this.userService.getAllUsers().then(response => {
      this.setState({ users: response });
    });
  }

  renderUsers = () => {
    return this.state.users.map((user, key) => {
      return (
        <li key={key} style={{ textDecoration: "none" }}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Here is a list of current users:</h1>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

export default HomePage;
