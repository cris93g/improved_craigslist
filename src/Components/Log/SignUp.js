import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      lastname: "",
      age: 0,
      adress: "",
      avatar: ""
    };
  }

  usernameHandler(e) {
    this.setState({ username: e.target.value });
  }
  passwordHandler(e) {
    this.setState({ password: e.target.value });
  }
  nameHandler(e) {
    this.setState({ name: e.target.value });
  }
  lastNameHandler(e) {
    this.setState({ lastname: e.target.value });
  }
  ageHandler(e) {
    this.setState({ age: e.target.value });
  }
  adressHandler(e) {
    this.setState({ adress: e.target.value });
  }

  render() {
    return (
      <div>
        <form className="signUpForm">
          UserName:
          <input type="text" onChange={e => this.usernameHandler(e)} />
          <br />
          Password:
          <input type="text" onChange={e => this.passwordHandler(e)} />
          <br />
          First Name:
          <input type="text" onChange={e => this.nameHandler(e)} />
          <br />
          Last Name:
          <input type="text" onChange={e => this.lastNameHandler(e)} />
          <br />
          Adress:
          <input type="text" onChange={e => this.adressHandler(e)} />
          <br />
          Age:
          <input type="text" onChange={e => this.ageHandler(e)} />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
