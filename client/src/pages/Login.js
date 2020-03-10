import React, { Component } from "react";
import AuthService from "../components/AuthService";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    // let history = useHistory();
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
        // take them to the About page
        this.setState({
          isAuthe: true
        });
        console.log("Logged In", this.state.username);
        // ???
        localStorage.setItem("username", this.state.username);
        // this.props.history.replace("/");
        // history.push("/");
        window.location.reload("/");
      })
      .catch(err => {
        // alert(err.response.data.message);
        console.log(err);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("render props", this.props);
    return (
      <div
        className="container"
        style={{
          paddingTop: "8" + "rem",
          paddingBottom: "13" + "rem",
          maxWidth: "600" + "px"
        }}
      >
        <h1 className="text-info text-center">SignIn</h1>

        <br />

        <form onSubmit={this.handleFormSubmit}>
          {/* <form onSubmit={this.props.handleLoginSubmit}> */}
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
          <div className="form-group">
            <label htmlFor="password">Password:</label>
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
          <button type="submit" className="btn btn-info btn-lg btn-block">
            Submit
          </button>
        </form>

        <br />

        <p className="text-center">
          <Link to="/signup">Don't have an Account? SignUp</Link>
        </p>
      </div>
    );
  }
}

export default Login;
