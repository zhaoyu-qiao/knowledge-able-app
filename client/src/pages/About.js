import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import SignUpSignInForm from "../components/SignUpForm"
// import { useParams } from "react-router-dom";
// import Form from "../components/Form";
// import images from "./images";


//// This Hero component is for this About page (the cover page) ////
function About() {
  return (
    <div>
      <Hero>
        <h1>Knowledge-ABLE</h1>
        <h2>Helping Adults and Children With Learning Disabilities</h2>
        <br />
        <h2>We make it easy for you to find <br /> the resources to help you learn.</h2>

        <br />

        <div>
          <a href='/search' class="btn btn-primary btn-lg" id="start-learning-btn">Click Here to Start Your Learning Journey</a>
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
            <div class="card text-white bg-info mb-3" style={{ maxWidth: 18 + 'rem' }}>
              <h5 class="card-header text-center">What do we do?</h5>
              <div class="card-body">
                <h5 class="card-title">Helping indivduals overcome their learning disability.  <br /> <br />
                  Find a tutor near you. <br /> <br />
                  Find a learning program near you. <br /> <br />
                  Find an online learning program. <br /><br />
                  Find educational games. <br /><br />
                  Find what you need to help YOU!
                  <br /> <br />
                </h5>
              </div>
            </div>
          </Col>

          <Col size="md-4">
            <div class="card text-white bg-secondary mb-3" style={{ maxWidth: 18 + 'rem' }}>
              <h5 class="card-header text-center">How do we do it?</h5>
              <div class="card-body">
                <h5 class="card-title"> On the Learnig Journey page you can: <br /> <br />
                  ~ View our suggested resources <br /> <br />
                  ~ Complete the search form to find resources that will help you with your learning disability. <br /> <br />
                  ~ Save the results you like.  <br /> <br />
                  ~ Add them to your learning development plan and take action.  <br /> <br />
                </h5>
              </div>
            </div>
          </Col>

          <Col size="md-4">
            <div class="card text-white bg-info mb-3" style={{ maxWidth: 18 + 'rem' }}>
              <h5 class="card-header text-center">Words of Encourgement</h5>
              <div class="card-body">
                <h5 class="card-title">
                  "You are Able to obtain the necessary Knowledge!
                 <br /> <br />
                  "Believe in Yourself"
                 <br /> <br />
                  "The difference between those who fail and those who succeed is largely perserverance. Never quit"
                  <br /> <br />
                  You are not alone. We are here to help!
                  <br /> <br />
                  <br /> <br />
                  <br /> <br />
                </h5>
              </div>
            </div>
          </Col>
        </Row>


        <Row>
          <Col size="md-12">
          </Col>
        </Row>

        <br />
        <br />

        {/* Booststrap carousel. Has random pictures for now. */}
        {/* <Row>
          <Col size="md-12">

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://memberpress.com/wp-content/uploads/2018/12/Learning-Management@2x-1024x760.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://www.schoology.com/sites/default/files/schoology-learning-management-system.png" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://www.pageuppeople.com/wp-content/uploads/2019/02/11-Trends-in-Learning-Banner-V2-1024x735.jpg" class="d-block w-100" alt="..." />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

          </Col>
        </Row> */}


      </Container>
    </div>
  );
}

export default About;




// Attempted modal signin and signup Form

          //     {/* <a href="/discover" className="btn badge-pill btn-outline-dark mt-3" target="_blank" >Click here to start</a> */}


          //     {/* <!-- Cited: https://getbootstrap.com/docs/4.4/components/modal/ -->
          // <!-- Button trigger modal --> */}
          //     {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
          //       id="submit-new-questn-btn">
          //       Click Here to Start
          //        </button> */}
          //     {/* <!-- Modal --> */}
          //     {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          //       aria-hidden="true">
          //       <div class="modal-dialog" role="document">
          //         <div class="modal-content"> */}
          //     {/* <div class="media">
          //             <img src="" width="100%" alt="" />
          //           </div> */}

          //     {/* <div class="modal-body">
          //             <SignUpSignInForm id="signUpSignIn"> */}
          //     {/* handleSignup={this.handleSignup} */}
          //     {/* </SignUpSignInForm>
          //             <p></p>
          //             <div class="modal-footer" className="text-center">
          //               <a href='/discover' class="btn btn-primary btn-lg" id="sign-up-btn">Sign Up</a> */}

          //     {/* <a href="#sign-in-btn" class="btn btn-primary btn-lg" id="modal-close-btn"> Sign In</a> */}

          //     {/* Goes with first modal - sign up */}
          //     {/* </div>
          //           </div>
          //         </div>
          //       </div>
          //     </div>

          //     <br /> */}

          //     {/* <!-- Cited: https://getbootstrap.com/docs/4.4/components/modal/ -->
          // <!-- Button trigger modal --> */}
          //     {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
          //       id="sign-in-btn">
          //       Sign In
          //     </button> */}
          //     {/* <!-- Modal --> */}
          //     {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          //       aria-hidden="true">
          //       <div class="modal-dialog" role="document">
          //         <div class="modal-content">
          //           <div class="media">
          //             <img src="" width="100%" alt="" />
          //           </div>

          //           <div class="modal-body">
          //             <h4 class="text-center">Sign In</h4>
          //             <h4 class="text-center">Your feedback is appreciated</h4>
          //             <p></p>
          //             <div class="modal-footer">
          //               <a href='/discover' class="btn btn-primary btn-lg" id="play-again-btn">Sign Up</a>
          //               <a href="/" class="btn btn-primary btn-lg" id="modal-close-btn" data-dismiss="modal">Close</a>

          //             </div>
          //           </div>
          //         </div>
          //       </div>
          //     </div> */}
