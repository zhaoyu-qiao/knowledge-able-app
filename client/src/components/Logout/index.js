import React, { Component } from "react";
import AuthService from "../AuthService";

function Logout(props) {
  const Auth = new AuthService();

  if (Auth.loggedIn()) console.log("Is logged in:", Auth.loggedIn);
  {
    return (
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a className="nav-link" href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>

          <li className="nav-item">
            {/* passing props from App.js and Navbar to display the username if user is logged in */}
            {props.user ? (
              <p className="nav-link text-dark">Hi,{props.user.username}</p>
            ) : null}{" "}
          </li>
        </ul>
      </div>
    );
  }
}
export default Logout;
