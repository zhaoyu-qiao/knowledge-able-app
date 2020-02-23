import React from "react";
import { Link } from "react-router-dom";
import SignUpSignInForm from "../SignUpForm/index"
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
                                window.location.pathname === "/" || window.location.pathname === "/about"
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
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        >
                            Learning Journey
              </Link>

                    </li>
                    <li className="nav-item">

                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >
                            Your Learning Materials
              </Link>
                    </li>

                    {/* The Dictionary dropdown menu */}
                    <div className="dropdown form-inline my-2 my-lg-0" >
                        <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dictionary
                        </button>
                        {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> */}
                        <form className="dropdown-menu p-4">
                            <div className="form-group">
                                <label for="exampleDropdownFormEmail2" className="text-primary">Enter a Word:</label>
                                <input type="text" className="form-control dictionary" id="exampleDropdownFormEmail2" placeholder="Enter a word" />

                                <button type="submit" className="btn btn-primary dictionary-btn" >Submit</button>
                            </div>
                            <br />
                            <div className="form-group">
                                <label for="exampleDropdownFormPassword2" className="text-primary">Definition Results:</label>
                                <textarea type="text" className="form-control dictionary-results" id="exampleDropdownFormPassword2" />
                            </div>

                        </form>

                        {/* </div> */}
                    </div>


                    {/* The SignUp / SignIn Form Modal Popup . This is not complete*/}

                    <div className="form-inline" >
                        {/* <!-- Cited: https://getbootstrap.com/docs/4.4/components/modal/ -->
                                   <!-- Button trigger modal --> */}
                        <button type="button" class="btn btn-info my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal"
                            id="signIn-signUp-btn" for="modal-toggle">
                            Sign Up / Sign In
                        </button>
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div classNmame="modal-dialog" role="document">
                                <div className="modal-content">
                                    {/* <div class="media">
                                  <img src="" width="100%" alt="" />
                                  </div> */}

                                    <div classNamw="modal-body text-center">
                                        <SignUpSignInForm id="signUpSignIn">
                                            {/* handleSignup={this.handleSignup} */}
                                        </SignUpSignInForm>
                                        <p></p>
                                        <div className="modal-footer text-center" >
                                            <a href="/">Already have an account? Sign In</a>
                                            {/* <a href='/discover' class="btn btn-primary btn-lg" id="sign-up-btn">Sign Up</a> */}

                                            {/* <a href="#sign-in-btn" class="btn btn-primary btn-lg" id="modal-close-btn"> Sign In</a> */}

                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>








                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
















// function Navbar() {
//     return (


//         <nav className="navbar navbar-expand-lg text-light">
//             <div className="container">
//                 <Link className="navbar-brand" to="/">Google Books Search<img className="logo"></img></Link>

//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <Link
//                             to="/search"
//                             className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
//                         > Search</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link
//                             to="/saved"
//                             className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
//                         >Saved</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>

//     );
// }

// export default Navbar;
