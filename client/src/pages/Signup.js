import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../components/AuthService";
import { FormErrors } from "../components/SignUpErrors/formErrors";
// import SignInSignUp from "../components/SignInSignUp";
import API from "./../utils/API";

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }

  // componentDidMount() {
  //   if (this.Auth.loggedIn()) {
  //     this.props.history.replace("/");
  //   }
  // }

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
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  // Email and password validation on user input. Cited: https://learnetto.com/blog/react-form-validation
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid ";
        break;
      case "password":
        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid
          ? ""
          : " is invalid, must contain a minimum of eight characters in length ";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div
        className="container signUpForm"
        style={{
          paddingTop: "8" + "rem",
          paddingBottom: "8" + "rem",
          maxWidth: "600" + "px"
        }}
      >
        <h1 className="text-info text-center">SignUp</h1>
        <br />
        {/* <div className="panel panel-default">
          <p className="text-danger">
            <FormErrors formErrors={this.state.formErrors} />
          </p>
        </div> */}
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              className="form-control"
              placeholder="Username"
              name="username"
              type="text"
              id="username"
              required
              onChange={this.handleChange}
            />
          </div>

          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.email
            )}`}
          >
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              placeholder="example@gmail.com"
              name="email"
              type="email"
              id="email"
              required
              onChange={this.handleChange}
            />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.password
            )}`}
          >
            <label htmlFor="pwd">Password:</label>
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              type="password"
              id="pwd"
              required
              onChange={this.handleChange}
            />
          </div>

          <div className="panel panel-default">
            <p className="text-danger">
              <FormErrors formErrors={this.state.formErrors} />
            </p>
          </div>

          <button type="submit" className="btn btn-info btn-lg btn-block">
            Submit
          </button>
        </form>
        <br />

        {/* <SignInSignUp> */}
        <p className="text-center">
          <Link to="/login">Already have an account? SignIn</Link>
        </p>
        {/* </SignInSignUp> */}
      </div>
    );
  }
}

export default Signup;
