import React, { Component } from "react";
import UserService from "../../services/UserService/UserService";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.userService = new UserService();
  }

  componentDidMount() {
    console.log(this.props.match.params);
    const id = this.props.match.params.id;

    this.userService.getUser(id).then(response => {
      this.setState({ user: response });
    });
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <h1>User:</h1>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    );
  }
}

export default UserPage;
