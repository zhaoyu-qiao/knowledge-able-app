import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../components/AuthService";
// import SignInSignUp from "../components/SignInSignUp";
import API from "./../utils/API";

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentDidMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace("/");
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.username, this.state.email, this.state.password)
      .then(res => {
        // once the user has signed up
        // send them to the About page
        this.props.history.replace("/");
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div
        className="container signUpForm"
        style={{
          paddingTop: "8" + "rem",
          paddingBottom: "8" + "rem",
          maxWidth: "960" + "px"
        }}
      >
        <h1 className="text-info">SignUp</h1>
        <br />
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="text-info">
              Username:
            </label>
            <input
              className="form-control"
              placeholder="Username"
              name="username"
              type="text"
              id="username"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="text-info">
              Email:
            </label>
            <input
              className="form-control"
              placeholder="example@gmail.com"
              name="email"
              type="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd" className="text-info">
              Password:
            </label>
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              type="password"
              id="pwd"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br />

        {/* <SignInSignUp> */}
        <p>
          <Link to="/login">Already have an account? SignIn</Link>
        </p>
        {/* </SignInSignUp> */}
      </div>
    );
  }
}

export default Signup;
