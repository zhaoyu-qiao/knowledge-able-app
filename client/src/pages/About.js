import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// For the carousel run: npm install react-responsive-carousel

// import SignUpSignInForm from "../components/SignUpForm"
// import { useParams } from "react-router-dom";
// import Form from "../components/Form";
// import images from "./images";

//// This Hero component and the Carousel are for this About page (the cover page). ////
function About() {
  return (
    <div>
      <Hero>
        <h1>Knowledge-ABLE</h1>
        <h2>Helping Adults and Children With Learning Disabilities</h2>
        <br />
        <h2>
          We make it easy for you to find <br /> the resources to help you
          learn.
        </h2>

        <br />

        <div>
          <a
            href="/search"
            className="btn btn-primary btn-lg"
            id="start-learning-btn"
          >
            Click Here to Start Your Learning Journey
          </a>
        </div>
      </Hero>

      <Container>
        <Row>
          <Col size="md-12">
            <h1 className=" text-center text-info">Knowledge-ABLE!</h1>
          </Col>
        </Row>

        <br />

        <Row>
          <Col size="md-4">
            {/* I know that Jim said not do to inline styles. But this is how bootstrap has it. */}
            <div
              className="card text-white bg-info mb-3"
              style={{ maxWidth: 18 + "rem" }}
            >
              <h5 className="card-header text-center">What do we do?</h5>
              <div className="card-body">
                <h5 className="card-title">
                  Helping individuals overcome their learning disability. <br />{" "}
                  <br />
                  Find a tutor near you. <br /> <br />
                  Find a learning program near you. <br /> <br />
                  Find an online learning program. <br />
                  <br />
                  Find educational games. <br />
                  <br />
                  Find what you need to help YOU!
                  <br /> <br />
                </h5>
              </div>
            </div>
          </Col>

          <Col size="md-4">
            <div
              className="card text-white bg-secondary mb-3"
              style={{ maxWidth: 18 + "rem" }}
            >
              <h5 className="card-header text-center">How do we do it?</h5>
              <div className="card-body">
                <h5 className="card-title">
                  {" "}
                  On the Learnig Journey page you can: <br /> <br />
                  <i className="fa fa-arrow-right text-info "></i> View our
                  suggested resources <br /> <br />
                  <i className="fa fa-arrow-right text-info "></i> Complete the
                  search form to find resources that will help you with your
                  learning disability. <br /> <br />
                  <i className="fa fa-arrow-right text-info "></i> Save the
                  results you like. <br /> <br />
                  <i className="fa fa-arrow-right text-info "></i> Add them to
                  your learning materials and take action. <br /> <br />
                </h5>
              </div>
            </div>
          </Col>

          <Col size="md-4">
            <div
              className="card text-white bg-info mb-3"
              style={{ maxWidth: 18 + "rem" }}
            >
              <h5 className="card-header text-center">Words of Encourgement</h5>
              <div className="card-body">
                <h5 className="card-title">
                  "You are Able to obtain the necessary Knowledge!"
                  <br /> <br />
                  "Believe in Yourself"
                  <br /> <br />
                  "The difference between those who fail and those who succeed
                  is largely perserverance. Never quit"
                  <br /> <br />
                  "In the middle of every difficulty lies opportunity"
                  <br /> <br />
                  You are not alone. We are here to help!
                  <br /> <br />
                  <br />
                </h5>
              </div>
            </div>
          </Col>
        </Row>

        <br />
        <br />

        <Row>
          <Col size="md-12">
            <div>
              <p></p>
            </div>
          </Col>
        </Row>

        <br />

        <Row>
          <Col size="md-12">
            <h1 className="card-header text-center text-info">
              What Some Of Our Users Are Saying
            </h1>
            <div className="carousel">
              <Carousel />
            </div>
          </Col>
        </Row>

        <br />
        <br />
      </Container>
    </div>
  );
}

export default About;

// Attempted modal signin and signup Form

//     {/* <a href="/discover" classNameName="btn badge-pill btn-outline-dark mt-3" target="_blank" >Click here to start</a> */}

//     {/* <!-- Cited: https://getbootstrap.com/docs/4.4/components/modal/ -->
// <!-- Button trigger modal --> */}
//     {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
//       id="submit-new-questn-btn">
//       Click Here to Start
//        </button> */}
//     {/* <!-- Modal --> */}
//     {/* <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
//       aria-hidden="true">
//       <div className="modal-dialog" role="document">
//         <div className="modal-content"> */}
//     {/* <div className="media">
//             <img src="" width="100%" alt="" />
//           </div> */}

//     {/* <div className="modal-body">
//             <SignUpSignInForm id="signUpSignIn"> */}
//     {/* handleSignup={this.handleSignup} */}
//     {/* </SignUpSignInForm>
//             <p></p>
//             <div className="modal-footer" classNameName="text-center">
//               <a href='/discover' className="btn btn-primary btn-lg" id="sign-up-btn">Sign Up</a> */}

//     {/* <a href="#sign-in-btn" className="btn btn-primary btn-lg" id="modal-close-btn"> Sign In</a> */}

//     {/* Goes with first modal - sign up */}
//     {/* </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <br /> */}

//     {/* <!-- Cited: https://getbootstrap.com/docs/4.4/components/modal/ -->
// <!-- Button trigger modal --> */}
//     {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
//       id="sign-in-btn">
//       Sign In
//     </button> */}
//     {/* <!-- Modal --> */}
//     {/* <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
//       aria-hidden="true">
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="media">
//             <img src="" width="100%" alt="" />
//           </div>

//           <div className="modal-body">
//             <h4 className="text-center">Sign In</h4>
//             <h4 className="text-center">Your feedback is appreciated</h4>
//             <p></p>
//             <div className="modal-footer">
//               <a href='/discover' className="btn btn-primary btn-lg" id="play-again-btn">Sign Up</a>
//               <a href="/" className="btn btn-primary btn-lg" id="modal-close-btn" data-dismiss="modal">Close</a>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div> */}
