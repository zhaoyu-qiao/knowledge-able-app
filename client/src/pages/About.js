import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// For the carousel run: npm install react-responsive-carousel

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
                  Find how to cope with your learning disability.
                  <br /> <br />
                  Find what you need to help you!
                  <br /> <br /> <br />
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
                  On the Learning Journey page you can: <br /> <br />
                  <i className="fa fa-arrow-right text-info "></i> View our
                  suggested resources. <br /> <br />
                  <i className="fa fa-arrow-right text-info "></i> Complete the
                  search more form to find other resources that will help you
                  with your learning disability. <br /> <br />
                  <i className="fa fa-arrow-right text-info "></i> Add the
                  results you like to your notes and take action.
                  <br /> <br />
                  On the YouTube page: <br /> <br />
                  <i className="fa fa-arrow-right text-info "></i> Click on the
                  resources buttons provided to view learning videos.
                  <br />
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
                  {/* Cited: https://www.ldrfa.org/inspirational-quotes-by-famous-people-with-learning-disabilities/ */}
                  "You shouldn't dream your film, you should make it"
                  <small>
                    <em> -Steven Spieldberg. Dyslexia, American filmmaker</em>
                  </small>
                  <br /> <br />
                  You are not alone. We are here to help!
                  <br /> <br />
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

      <div
        className="row more-info"
        style={{
          paddingTop: "5" + "rem",
          paddingBottom: "10" + "rem"

          // height: "600" + "px"
        }}
      >
        <div className="col-md-12 text-center">
          <h5 className="text-info">Your Feedback is Important</h5>

          <h6>
            {" "}
            Want to make a post to our What Some of Our Users are Saying
            section?
          </h6>
          <h6>Contact Us:</h6>
          <h6> Knowledge-able@knowlegdeable.com</h6>

          <h6> 1-800-245-2253</h6>
        </div>
        {/* <div className="col-md-6 text-center tex-info">
          <h5 className="text-info">
            What is that orange circle icon with the headphones?
          </h5>
          <small> Knowledge-ABLE is using Browsealoud.</small>
          <br />
          <small>
            {" "}
            Browsealoud is a reading, speech and translation support system.
          </small>
          <br />
          <a
            href="https://www.youtube.com/watch?v=LH7657-xBPI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small className="text-primary">Browsealoud Overview</small>
          </a>
          <br />
          <a
            href="https://www.youtube.com/watch?v=w9uxDRpISUI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small className="text-primary">Browsealoud Guide</small>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default About;
