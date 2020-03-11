
import React from "react";
import { Link } from "react-router-dom";
import Browsealoud from "../Browsealoud/index";
import Dictionary from "../Dictionary/index";
import Note from "../Note/index";
// This is for scrolling feature
// import { DropdownButton, MenuItem } from 'react-bootstrap'

import AuthService from "../AuthService";
import Logout from "../Logout/index";
import "./style.css";

//// This is the Navbar component used in all pages. This includes the dictionary and the sign in and sign up form ////

function Navbar() {
  const Auth = new AuthService();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-info bg-info fixed-top">
      <Link className="navbar-brand" to="/">
        Knowledge-ABLE
      </Link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Journey
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={
                window.location.pathname === "/saved"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              YouTube
            </Link>
          </li>
          {/* Browsealoud text to speech software: https://www.texthelp.com/en-us/products/browsealoud/ */}
          <li className="browse-aloud form-inline">
            {/* <div id="__ba_launchpad"></div> */}
            <div>
              <Browsealoud />
            </div>
          </li>

          {/* The Dictionary dropdown menu */}
          <div className="dropdown form-inline my-2 my-lg-0 ">
            <button
              className="btn btn-info dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dictionary
            </button>
            {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> */}
            <div className="dropdown-menu p-4" style={{ overflowY: "scroll" }}>
              <Dictionary />
            </div>
            {/* </div> */}
          </div>

          {/* The Note dropdown menu */}
          <div className="dropdown form-inline my-2 my-lg-0 ">
            <button
              className="btn btn-info dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Add a Note
            </button>
            {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> */}
            <div className="dropdown-menu p-4" style={{ overflowY: "scroll" }}>
              <Note />
            </div>
          </div>

          <li className="nav-item">
            <Link
              to="/notes"
              className={
                window.location.pathname === "/notes"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Notes
            </Link>
          </li>

          {/* If there is an id token in localStorage indicating that a user is logged in, display the logout link. If no user is logged in, then display the sign up and sign in links */}
          {localStorage.getItem("id_token") ? (
            <div>
              <Logout />
            </div>
          ) : (
            //  {/*SignIn SignUp Forms. */}
            <React.Fragment>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  SignIn
                </Link>
              </li>
            </React.Fragment>
          )}

          <div>
            {/* {this.state.loggedIn && <p>Hi, {this.state.username}!</p>})   */}
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

