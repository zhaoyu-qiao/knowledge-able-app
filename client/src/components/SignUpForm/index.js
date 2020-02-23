import React, { useState } from "react";
import "./style.css";
// import React from "react";
// import { BrowserRouter as ReactDOM } from "react-router-dom";

//// This SignUpSignInForm component goes with the NavBar Sign In / Sign Up Modal popup ////

function SignUpSignInForm(props) {
  // Cited: From Jim in className on 2/18/20
  // Simple Password Validation
  const [isValid, onPasswordChange] = useValidatePassword("");

  function useValidatePassword() {
    const [valid_Password, setValid] = useState(false);
    const onChange = e => {
      const val = e.target.value;
      let isValid = false;
      if (val.length >= 8) {
        isValid = true;
      }
      setValid(isValid);
    };
    return [valid_Password, onChange];
  }

  // Simple Email Validation *** Not Working. Will come back to it**
  // const [isValidEmail, onEmailChange] = useValidateEmail();

  // function useValidateEmail() {
  //     const [valid_Email, setValid] = useState(false);
  //     const onEmailChanged = e => {
  //         const val = e.target.value;
  //         let isValidEmail = false;
  //         if (val.match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) { //Change this to the password requirement
  //             isValidEmail = true;
  //         }
  //         setValid(isValidEmail);
  //     };
  //     return [valid_Email, onEmailChanged];
  // }

  return (
    <div className="container">
      {/* ****** Sign Up ****** */}
      <form className="signup">
        <label
          htmlFor="search"
          id="signUp-label"
          className="text-info text-center"
        >
          <h2>Create An Account</h2>
        </label>
        <br />
        <div className="form-group">
          <input
            name="Username"
            id="username-input"
            placeholder="Username"
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            id="email-input"
            placeholder="Email"
            type="text"
            required
          />
          <span className="error"></span>
        </div>
        <div className="form-group">
          <input
            name="Password"
            id="password-input"
            placeholder="Password"
            type="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}"
            required
            onChange={e => onPasswordChange(e)}
          />
          <p className="text-info text-center">
            {isValid ? "Valid Password" : "Invalid Password"}
          </p>
        </div>
        {/* <!-- <div className="form-group">
                <input className="form-input" type="password" id="psw-repeat-input"
                placeholder="Repeat Password" name="psw-repeat" required />
                </div> --> */}
        <div className="noEmptyField"></div>
        <div className="missmatch"></div>

        <div className="error-group">
          <div id="errors"></div>
        </div>
        {/* <div style="display: none" id="alert" className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span> <span className="msg"></span>
                </div> */}
        <br />
        <div>
          <a href="/search" className="btn btn-primary btn-lg" id="sign-up-btn">
            Sign Up
          </a>
          {/* <!-- <a href="" type="submit" id="submit" id="sign-up-btn" onSubmit="validateEmail();" --> */}
          {/* <a href="/search" id="submit" className="btn btn-primary btn-lg" className="registerbtn">Sign Up</a> */}
        </div>
        {/* <div id="message">
                    <h5>Password must contain the following:</h5>
                    <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                    <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                    <p id="number" className="invalid">A <b>number</b></p>
                    <p id="length" className="invalid">Minimum <b>10 characters</b></p>
                </div> */}
      </form>
    </div>

    //  {/* ****** Sign In ****** */}

    //  <form className="signup">
    //  <label htmlFor="search" id="signUp-label" className="text-info text-center"><h2>Create An Account</h2></label>

    //  <br />

    //  <div className="form-group">
    //      <input name="Username"
    //          id="username-input"
    //          placeholder="Username"
    //          type="text"
    //          required
    //      />
    //  </div>

    //  <div className="form-group">
    //      <input
    //          name="Password"
    //          id="password-input"
    //          placeholder="Password"
    //          type="Password"

    //      // onChange={e => onPasswordChange(e)}
    //      />
    //      {/* <p className="text-info text-center">{isValid ? "Valid Password" : "Invalid Password"}</p> */}
    //  </div>
    //  {/* <!-- <div className="form-group">
    //  <input className="form-input" type="password" id="psw-repeat-input"
    //  placeholder="Repeat Password" name="psw-repeat" required />
    //  </div> --> */}
    //  <div className="noEmptyField"></div>
    //  <div className="missmatch"></div>

    //  <div className="error-group">
    //      <div id="errors"></div>
    //  </div>

    //  <br />
    //  <div>
    //      <a href='/search' className="btn btn-primary btn-lg" id="sign-in-btn">Sign In</a>

    //  </div>

    // </form>
  );
}

export default SignUpSignInForm;

// This code is from the Google Books Search homework
// <div className="container">
//     <form>
//         <div className="form-group">
//             <label htmlFor="search"><h2>Search for and save Books of Interest</h2></label>
//             <input
//                 onChange={props.handleInputChange}
//                 value={props.search}
//                 name="search"
//                 type="text"
//                 className="form-control"
//                 placeholder="Search a Book"
//                 id="search"
//             />

//             <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5" className="search-btn">
//                 Search
//     </button>
//         </div>
//     </form>
// </div>

// A  react sign up and sign in code I found online but is not working. Will revisit this....
// let handleSignup = ({
//     displayName: "handleSignup",
//     getInitialState: function () {
//         return { signup: false, login: true };
//     },
//     switch: function (word) {
//         let signup, login;
//         if (word === "signup") { signup = true; login = false; } else { login = true; signup = false; }
//         return this.setState({ login: login, signup: signup });

//     },
//     render: function () {

//         // let self = this;
//         return (
//             React.createElement("div", null,
//                 React.createElement("div", { id: "buttons" },
//                     React.createElement("p", { id: "signupButton", onClick: this.switch.bind(null, "signup"), className: this.state.signup ? "yellow" : "blue" }, "Sign In"),
//                     React.createElement("p", { id: "loginButton", onClick: this.switch.bind(null, "login"), className: this.state.login ? "yellow" : "blue" }, " Login")),

//                 this.state.signup ? React.createElement(Signup, null) : null,
//                 this.state.login ? React.createElement(Login, null) : null));

//     }
// });

// let Signup = ({
//     displayName: "Signup",

//     render: function () {

//         return (
//             React.createElement("div", null,

//                 React.createElement("div", { id: "signup" },
//                     React.createElement("input", { type: "text", id: "first", placeholder: "First Name" }),
//                     React.createElement("input", { type: "text", id: "last", placeholder: "Last Name" }),
//                     React.createElement("input", { type: "email", id: "email", placeholder: "Email" }),
//                     React.createElement("input", { type: "password", id: "password", placeholder: "Password" }),
//                     React.createElement("input", { type: "password", id: "confirm", placeholder: "Confirm Password" }),
//                     React.createElement("button", { id: "send" }, "Send"))));

//     }
// });

// let Login = ({
//     displayName: "Login",
//     render: function () {

//         return (

//             React.createElement("div", null,

//                 React.createElement("div", { id: "login" },
//                     React.createElement("input", { type: "email", id: "email", placeholder: "Email" }),
//                     React.createElement("input", { type: "password", id: "password", placeholder: "Password" }),
//                     React.createElement("button", { id: "send" }, "Send"))));

//     }
// });

// ReactDOM.render(React.createElement(handleSignup, null), document.getElementById("signUpSignIn"));
