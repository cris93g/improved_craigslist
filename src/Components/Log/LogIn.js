import React, { Component } from "react";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div>
        <p>log in</p>
      </div>
    );
  }
}

export default LogIn;
