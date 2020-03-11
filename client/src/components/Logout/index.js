import React, { Component } from "react";
import AuthService from "../AuthService";

function Logout(props) {
  const Auth = new AuthService();

  if (Auth.loggedIn()) console.log("Is logged in:", Auth.loggedIn);
  {
    return (
      <div>
        <li className="nav-item">
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a className="nav-link" href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </li>
        <div>
          <li className="nav-item">
            {/* passing props from App.js and Navbar to display the username if user is logged in */}
            {props.user ? <p>Hi, {props.user.username}</p> : null}{" "}
          </li>
        </div>
      </div>
    );
  }
}
export default Logout;
