import React, { Component } from "react";
import "./style.css";
import axios from "axios";
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yup from "yup";
//https://www.digitalocean.com/community/tutorials/how-to-validate-a-login-form-with-react-and-formik

// Cited change view form format: https://codepen.io/m0n4d/pen/qJBazW
// Cited MERN Passport.JS: https://medium.com/@brendt_bly/simple-mern-passport-app-tutorial-4aec2105e367
class SignInSignUp extends Component {
  //   <Formik
  //   initialValues={{ email: "", password: "" }}
  //   onSubmit={(values, { setSubmitting }) => {
  //     setTimeout(() => {
  //       console.log("Logging in", values);
  //       setSubmitting(false);
  //     }, 500);
  //   }}
  // ></Formik>

  constructor(props) {
    super(props);
    this.state = {
      currentView: "signUp",
      username: "",
      email: "",
      password: "",
      redirectTo: null
    };

    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // set initial state
  initialState = { ...this.state };

  handleInputChange = event => {
    // update state
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });

    // validate = values => {
    //   let errors = {};
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Invalid email address";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be 8 characters long.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Invalid password. Must contain one number";
    //   }

    //   return errors;
    // };
  };

  handleSelectChange = e => {
    this.setState({
      usState: e.target.value
    });
  };

  // ***** Sign Up ***** //
  // ****************** //
  handleSignUpSubmit = event => {
    event.preventDefault();

    this.setState({
      ...this.initialState
    });
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    console.log(this.state);

    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            //redirect to About page
            redirectTo: "/"
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  };

  // ***** Sign In ***** //
  // ****************** //
  handleSignInSubmit = event => {
    event.preventDefault();

    this.setState({
      ...this.initialState
    });
    console.log("handle Sign IN Submit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

  // This allows a user to change between the sign up form and the sign in form on the same modal //
  changeView = view => {
    this.setState({
      currentView: view
    });
  };

  currentView = () => {
    switch (this.state.currentView) {
      // ***** Sign Up ***** //
      case "signUp":
        return (
          <form>
            <h2 className="text-info">Sign Up!</h2>
            <fieldset>
              <legend className="text-info">Create An Account</legend>
              <ul>
                <li>
                  <label htmlFor="username" className="text-info">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.username}
                    id="username"
                    name="username"
                    required
                    onChange={e => this.handleInputChange(e)}
                    // onChange={this.handleInputChange}
                    // onChange = {e => this.handleInputChange}
                  />
                </li>
                <li>
                  <label htmlFor="email" className="text-info">
                    Email:
                  </label>
                  <input
                    value={this.state.email}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    onChange={e => this.handleInputChange(e)}
                    // onChange={this.handleInputChange}
                    // onChange = {e => this.handleInputChange}
                  />
                </li>
                <li>
                  <label htmlFor="password" className="text-info">
                    Password:
                  </label>
                  <input
                    value={this.state.password}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                    onChange={e => this.handleInputChange(e)}
                    // onChange={this.handleInputChange}
                    // onChange = {e => this.handleInputChange}
                  />
                </li>

                {/* <li>
                  <label htmlFor="confirm-password" className="text-info">
                    Confirm Password:
                  </label>
                  <input
                    //  value={this.state.password}
                    type="password"
                    className="form-control"
                    id="password-confirm"
                    name="password_confirmation"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                    onChange={this.handleInputChange}
                    // onChange = {e => this.handleInputChange}
                  />
                </li> */}
              </ul>
            </fieldset>
            <button
              type="submit"
              className="btn btn-info"
              onClick={this.handleSignUpSubmit}
            >
              Submit
            </button>
            {/* <a type="button" className="btn btn-info" href="">
              Submit
            </a> */}
            <button
              type="button"
              className="btn btn-info"
              onClick={() => this.changeView("logIn")}
            >
              Already have an account? Sign In
            </button>
            {/* <a
              className="text-info text-center"
              onClick={() => this.changeView("logIn")}
            >
              Already have an account? Sign In
            </a> */}
          </form>
        );
      // break;

      // ***** Sign In ***** //
      case "logIn":
        return (
          <form>
            <h2 className="text-info">Welcome Back!</h2>
            <fieldset>
              <legend className="text-info">Sign In</legend>
              <ul>
                <li>
                  <label htmlFor="username" className="text-info">
                    Username:
                    {/* Username: {""} */}
                  </label>
                  <input
                    value={this.state.username}
                    name="username"
                    type="text"
                    id="username"
                    className="form-control"
                    // placeholder="Username"
                    required
                    // onChange={this.handleInputChange}
                    onChange={e => this.handleInputChange(e)}
                  />
                </li>
                <li>
                  <label htmlFor="password" className="text-info">
                    {" "}
                    Password:
                  </label>
                  <input
                    value={this.state.password}
                    name="password"
                    type="password"
                    id="password"
                    className="form-control"
                    // placeholder="Password"
                    required
                    // onChange={this.handleInputChange}
                    onChange={e => this.handleInputChange(e)}
                  />
                </li>
                <li>
                  <i />
                  <a onClick={() => this.changeView("PWReset")} href="#">
                    Forgot Password?
                  </a>
                </li>
              </ul>
            </fieldset>
            <button
              type="submit"
              className="btn btn-info"
              onClick={this.handleSignInSubmit}
            >
              Submit
            </button>
            {/* <a type="submit" className="btn btn-info" href="/search">
              Sign In
            </a> */}
            <button
              type="button"
              className="btn btn-info"
              onClick={() => this.changeView("signUp")}
            >
              Don't have an account? Sign Up
            </button>

            {/* <a
              className="text-info text-center"
              onClick={() => this.changeView("signUp")}
            >
              Don't have an account? Sign Up
            </a> */}
          </form>
        );
      // break;
      case "PWReset":
        return (
          <form>
            <h2 className="text-info">Reset Password</h2>
            <fieldset>
              <legend className="text-info">Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button className="btn btn-info">Send Reset Link</button>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => this.changeView("logIn")}
            >
              Go Back
            </button>
          </form>
        );
      default:
        break;
    }
  };

  render() {
    return <section id="entry-page">{this.currentView()}</section>;
  }
}

export default SignInSignUp;
