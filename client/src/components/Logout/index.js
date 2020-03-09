import React, { Component } from "react";
import AuthService from "../AuthService";

function Logout() {
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
        {/* <div>{this.state.loggedIn && <p>Hi, {this.state.username}!</p>}</div> */}
      </div>
    );
  }
}
export default Logout;
