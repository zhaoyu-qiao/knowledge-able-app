import React from "react";
import { Link } from "react-router-dom";
// import SignUpSignInForm from "../SignUpForm/index";
// import SignInForm from "../SignInForm/index";
import LoginModal from "../LoginModal/index";
import Browsealoud from "../Browsealoud/index";
import Dictionary from "../Dictionary/index";
// This is for scrolling feature
// import { DropdownButton, MenuItem } from 'react-bootstrap'
import "./style.css";

//// This is the Navbar component used in all pages. This includes the dictionary and the sign in and sign up form ////

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-info bg-info fixed-top">
      <Link className="navbar-brand" to="/">
        Knowledge-ABLE
      </Link>

      <div>
        <ul className="navbar-nav">
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
              Learning Journey
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
              Your Learning Materials
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
            <div
              className="dropdown-menu p-4"
              style={{ "overflow-y": "scroll" }}
            >
              <Dictionary />
              {/* <div className="form-group">
                <label
                  htmlFor="exampleDropdownFormEmail2"
                  className="text-primary"
                >
                  Enter a Word:
                </label>
                <input
                  type="text"
                  className="form-control dictionary"
                  id="exampleDropdownFormEmail2"
                  placeholder="Enter a word"
                />

                <button
                  type="submit"
                  className="btn btn-primary dictionary-btn"
                >
                  Submit
                </button>
              </div>
              <br />
              <div className="form-group">
                <label
                  htmlFor="exampleDropdownFormPassword2"
                  className="text-primary"
                >
                  Definition Results:
                </label>
                <textarea
                  type="text"
                  className="form-control dictionary-results"
                  id="exampleDropdownFormPassword2"
                />
              </div> */}
            </div>
            {/* </div> */}
          </div>

          {/* React Responsive Modal SignIn SignUp Form. */}
          <div className="form-inline">
            <LoginModal />
            {/* <SignInForm /> */}
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
