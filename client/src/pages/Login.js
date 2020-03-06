import React, { Component } from "react";
import AuthService from "../components/AuthService";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  // componentDidMount() {
  //   if (this.Auth.loggedIn()) {
  //     this.props.history.replace("/");
  //   }
  // }

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        console.log("Logged In", this.state.username);
        this.props.history.replace("/");
      })
      .catch(err => {
        alert(err.response.data.message);
      });
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
        className="container"
        style={{
          paddingTop: "8" + "rem",
          paddingBottom: "13" + "rem",
          maxWidth: "960" + "px"
        }}
      >
        <h1 className="text-info">SignIn</h1>

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
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-info">
              Password:
            </label>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <br />

        <p>
          <Link to="/signup">Don't have an Account? SignUp</Link>
        </p>
      </div>
    );
  }
}

export default Login;
