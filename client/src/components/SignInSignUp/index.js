import React, { Component } from "react";
import "./style.css";

// Cited: https://codepen.io/m0n4d/pen/qJBazW

class SignInSignUp extends Component {
  // state = {
  //   username: "",
  //   password: "",
  //   email: "",
  // }

  // // handling chane in the inputs
  // handleInputChange =(event) => {
  //   // update state
  //   const value = event.target.value;
  //   const name = event.target.name;

  //   this.state ({
  // [name] :value

  //   });

  // };

  // // set initial state
  // initialState = {...this.state}

  // // resetting the state
  // handleFormSubmit = event => {
  //   event. preventDefault ();

  //   console.log(this.state)
  //   this.setState ({
  //     ...this.initialState
  //   });
  // };

  constructor(props) {
    super(props);
    this.state = {
      currentView: "signUp"
    };
  }

  changeView = view => {
    this.setState({
      currentView: view
    });
  };

  currentView = () => {
    switch (this.state.currentView) {
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
                    // value={this.state.username}
                    id="username"
                    name="username"
                    required
                    // onChange = {e => this.handleInputChange}
                  />
                </li>
                <li>
                  <label htmlFor="email" className="text-info">
                    Email:
                  </label>
                  <input
                    //  value={this.state.email}
                    type="email"
                    id="email"
                    name="email"
                    required
                    // onChange = {e => this.handleInputChange}
                  />
                </li>
                <li>
                  <label htmlFor="password" className="text-info">
                    Password:
                  </label>
                  <input
                    //  value={this.state.password}
                    type="password"
                    id="password"
                    name="password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required

                    // onChange = {e => this.handleInputChange}
                  />
                </li>
              </ul>
            </fieldset>
            {/* <button type="button" className="btn btn-info">
              Submit
            </button> */}
            <a type="button" className="btn btn-info" href="/search">
              Submit
            </a>
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
      case "logIn":
        return (
          <form method="post">
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
                    // value={this.state.username}
                    name="username"
                    type="text"
                    id="username"
                    className="form-control"
                    // placeholder="Username"
                    required
                  />
                </li>
                <li>
                  <label htmlFor="password" className="text-info">
                    {" "}
                    Password:
                  </label>
                  <input
                    // value={this.state.password}
                    name="password"
                    type="password"
                    id="password"
                    className="form-control"
                    // placeholder="Password"
                    required
                  />
                </li>
                <li>
                  <i />
                  <a onClick={() => this.changeView("PWReset")} href="/">
                    Forgot Password?
                  </a>
                </li>
              </ul>
            </fieldset>
            <a type="button" className="btn btn-info" href="/search">
              Sign In
            </a>
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
