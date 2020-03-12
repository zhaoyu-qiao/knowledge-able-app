import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

//// This Form component is the search "form" page (Your Learning Journey) ////

function Form(props) {
  return (
    <div className="container search-form">
      {/* ****** What Are Learning Disabilities Section ****** */}
      <Row>
        <Col size="md-6">
          <div className="what-are-lds">
            <h2 className="text-center">What Are Learning Disabilities?</h2>

            <br />

            <iframe
              width="500"
              height="325"
              src="https://www.youtube.com/embed/RKCNqHEzLwQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
        <Col size="md-6">
          <br />
          <div>
            {/* Cited: www.web.md */}
            <h5 className="text-justified">
              <b className="text-info">A learning disability is </b> a problem
              that affects how a person receives and processes information.
              People with learning disabilities may have trouble with any of the
              following: Reading, Writing, Doing math, Understanding directions.
            </h5>

            <br />
            <br />

            {/* Cited: www.web.md */}
            <h5 className="text-justified">
              <b className="text-info">Learning disabilities have </b>nothing to
              do with how smart a person is. Rather, a person with a learning
              disability may just see, hear, or understand things differently.
              That can make everyday tasks, such as studying for a test or
              staying focused in class, much more difficult. There are
              strategies a person can learn to make it easier to cope with these
              differences. Please see our below Learning to Cope section to
              learn how you can cope with your learning disability.
            </h5>
          </div>
        </Col>
      </Row>

      <br />

      {/* ****** Six Common Learning Disabilities Section ****** */}

      <h2 className="text-center">Common Learning Disabilities</h2>

      <br />

      <h4 className="text-center">
        See the below six images for our suggested resources on the common
        learning disability
      </h4>

      <br />

      <form className="search">
        {/* ****** The learning disability cards ****** */}
        <div className="search-form-cards w-auto p-3 col-md-12">
          <div
            className="card bg-info disability-card"
            style={{ width: 15.7 + "rem" }}
          >
            <div className="card-img-top dsylexia-card" alt="..."></div>
            <div className="card-body">
              <a
                href="https://dyslexiaida.org/dyslexia-basics/"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                View
              </a>
              <a
                href="http://dyslexiahelp.umich.edu/tools/fun-games-for-dyslexics"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Skill Games
              </a>
            </div>
          </div>

          <div
            className="card bg-info disability-card"
            style={{ width: 15.7 + "rem" }}
          >
            <div className="card-img-top math-disability-card" alt="..."></div>
            <div className="card-body">
              <a
                href="https://ldaamerica.org/types-of-learning-disabilities/dyscalculia/"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                View
              </a>
              <a
                href="http://numberdyslexia.com/top-10-must-have-free-apps-for-dyscalculia-2019/"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Skill Games
              </a>
            </div>
          </div>

          <div
            className="card bg-info disability-card"
            style={{ width: 15.7 + "rem" }}
          >
            <div
              className="card-img-top writing-disability-card "
              alt="..."
            ></div>
            <div className="card-body">
              <a
                href="https://dyslexiaida.org/understanding-dysgraphia/"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                View
              </a>
              <a
                href="https://academictherapycenter.com/2014/05/apps-to-help-students-with-dysgraphia-and-writing-difficulties/"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Skill Games
              </a>
            </div>
          </div>

          <div
            className="card bg-info disability-card"
            style={{ width: 15.9 + "rem" }}
          >
            <div
              className="card-img-top auditory-disability-card"
              alt="..."
            ></div>
            <div className="card-body">
              <a
                href="https://www.asha.org/public/hearing/Auditory-Processing-Disorder/"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                View
              </a>
              <a
                href="https://www.virtualspeechcenter.com/apps/category/Auditory_Processing?gclid=CjwKCAiA1rPyBRAREiwA1UIy8IuDRvPBqoNUpvG6ir6oIFU6gL1lM2mUoDoKRh7BMDnXlBKroiaNORoCSyQQAvD_BwE"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Skill Games
              </a>
            </div>
          </div>

          <div
            className="card bg-info disability-card"
            style={{ width: 15.9 + "rem" }}
          >
            <div
              className="card-img-top visual-disability-card"
              alt="..."
            ></div>
            <div className="card-body">
              <a
                href="https://www.advancedvisiontherapycenter.com/assessments/visual_processing/"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                View
              </a>
              <a
                href="https://www.specialmomadvocate.com/apps-help-visual-processing/"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Skill Games
              </a>
            </div>
          </div>

          <div
            className="card bg-info disability-card"
            style={{ width: 15.7 + "rem" }}
          >
            <div className="card-img-top adhd-disability-card" alt="..."></div>
            <div className="card-body">
              <a
                href="https://add.org/"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                View
              </a>
              <a
                href="https://www.additudemag.com/slideshows/brain-training-apps-like-lumosity/"
                target="blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Skill Games
              </a>
            </div>
          </div>

          {/* Place Holders for the learning disability images not in a bootstrap card */}
          {/* <a href="https://dyslexiaida.org/dyslexia-basics/" target='blank' rel="noopener noreferrer" >
            <div className="dsylexia-card rounded-lg">

              {props.children}
            </div>
          </a> */}

          {/* <a href="https://ldaamerica.org/types-of-learning-disabilities/dyscalculia/" target='blank' rel="noopener noreferrer" >
            <div className="math-disability-card  rounded-lg">

              {props.children}
            </div>
          </a> */}
          {/* <a href="https://dyslexiaida.org/understanding-dysgraphia/" target='blank' rel="noopener noreferrer" >
            <div className="writing-disability-card  rounded-lg">

              {props.children}
            </div>
          </a> */}
          {/* <a href="https://www.asha.org/public/hearing/Auditory-Processing-Disorder/" target='blank' rel="noopener noreferrer" >
            <div className="auditory-disability-card  rounded-lg">

              {props.children}
            </div>
          </a> */}
          {/* <a href="https://www.advancedvisiontherapycenter.com/assessments/visual_processing/" target='blank' rel="noopener noreferrer" >
            <div className="visual-disability-card  rounded-lg">

              {props.children}
            </div>
          </a> */}
          {/* <a href="https://add.org/" target='blank' rel="noopener noreferrer" >
            <div className="adhd-disability-card  rounded-lg">

              {props.children}
            </div>
          </a> */}
        </div>

        <br />

        {/* ****** Coping With Learning Disabilities Section ****** */}
        {/* All inforamation is stil section Cited: https://www.talkspace.com/blog/learning-disabilities-school-stress/ */}
        <Row>
          <Col size="md-12">
            <div className="coping-container">
              <h2 className="text-center">Learning to Cope</h2>
              <br />
              <h4 className="text-center">
                Here are four ways to cope with your learning disability
              </h4>
              <h4 className="text-center">
                Click on the navigation buttons to view
              </h4>

              <br />
              <br />

              {/* Learning To Cope Slider */}
              {/* Cited: https://github.com/drygiel/csslider/blob/master/examples/themes/csslider.light.css */}
              <div className="csslider d-flex justify-content-between">
                <input
                  type="radio"
                  name="slides"
                  id="slides_1"
                  placeholder="1"
                />
                <input type="radio" name="slides" id="slides_2" />
                <input type="radio" name="slides" id="slides_3" />
                <input type="radio" name="slides" id="slides_4" />

                <ul>
                  {/* Content of silde 1 */}
                  <li>
                    <div>
                      <h3 className="mb-4 text-center text-light">
                        <span className="badge badge-warning badge-pill">
                          1
                        </span>
                        Understand Yourself{" "}
                      </h3>
                      <br />
                      <h5 className="mb-1 text-light">
                        Get a good current evaluation to know your diagnosis,
                        strengths, and needs. If you’ve already had one done,
                        make sure you understand the results and any
                        recommendations made. The evaluator should be able to
                        give you an explanation. In some cases, the evaluator
                        can also make specific recommendations to address your
                        learning problems.
                      </h5>
                      <br />
                      <br />

                      <a
                        href="https://www.additudemag.com/self-test-for-dyscalculia-in-adults/"
                        target="blank"
                        rel="noopener noreferrer"
                        className="btn btn-info text-center cope-btn"
                      >
                        Free Online Evaluations For Adults
                      </a>

                      <a
                        href="https://www.lexercise.com/tests"
                        target="blank"
                        rel="noopener noreferrer"
                        className="btn btn-info"
                      >
                        Free Online Evaluations For Children
                      </a>
                    </div>
                  </li>

                  {/* Content of slide 2 */}
                  <li>
                    <h3 className="mb-4 text-center text-light">
                      <span className="badge badge-warning badge-pill">2</span>
                      Know Your Rights
                    </h3>
                    <br />

                    <h5 className="mb-1 text-light">
                      If you have a diagnosed learning disability, you may
                      qualify for accommodations or specialized instruction,
                      even in a college or work setting.
                    </h5>
                    <br />
                    <br />

                    <a
                      href="https://www.ncld.org/"
                      target="blank"
                      rel="noopener noreferrer"
                      className="btn btn-info text-center"
                    >
                      Click here to Learn More About Your Rights
                    </a>
                  </li>

                  {/* Content of Slide 3 */}
                  <li>
                    <h3 className="mb-4 text-center text-light">
                      <span className="badge badge-warning badge-pill">3</span>
                      Get The Help You Need
                    </h3>
                    <h5 className="mb-1 text-light">
                      You are on the right track by being on this site! Ask for
                      a meeting with your educators or employers to discuss your
                      needs. Your school and or employer may also be required to
                      provide accommodations for you.
                    </h5>

                    <br />
                    <br />
                    <a
                      href="http://www.ldonline.org/article/9942/"
                      target="blank"
                      rel="noopener noreferrer"
                      className="btn btn-info text-center mb-10 cope-btn"
                    >
                      Accommodations At Work
                    </a>
                    <a
                      href="http://www.ldonline.org/article/8022/"
                      target="blank"
                      rel="noopener noreferrer"
                      className="btn btn-info"
                    >
                      Accommodations At School
                    </a>
                  </li>

                  {/* Content of Slide 4 */}
                  <li>
                    <div id="slide-4">
                      <h3 className="mb-4 text-center text-white">
                        <span className="badge badge-warning badge-pill">
                          4
                        </span>
                        Assess And Treat Other Problems
                      </h3>

                      <br />
                      <h5 className="mb-1 text-light text-center">
                        Because having a learning disability raises your risk
                        for other mental health conditions, consider talking
                        with a mental health professional. You may benefit from
                        a screening to make sure there’s nothing else going on.
                        This is especially important if you’re experiencing
                        stress because of the learning disability. Outside
                        support can be essential for good stress management.
                      </h5>
                      <br />
                      <br />
                      <a
                        href="https://www.nami.org/Find-Support/NAMI-HelpLine"
                        target="blank"
                        rel="noopener noreferrer"
                        className="btn btn-info"
                      >
                        Contact the National Alliance For Mental Health
                      </a>
                    </div>
                  </li>
                </ul>
                <div class="arrows">
                  <label htmlFor="slides_1"></label>
                  <label htmlFor="slides_2"></label>
                  <label htmlFor="slides_3"></label>
                  <label htmlFor="slides_4"></label>
                </div>
                <div class="navigation">
                  <div>
                    <label htmlFor="slides_1">1</label>
                    <label htmlFor="slides_2">2</label>
                    <label htmlFor="slides_3">3</label>
                    <label htmlFor="slides_4">4</label>
                  </div>
                </div>
              </div>

              <br />
              <br />
            </div>
          </Col>
        </Row>

        <br />

        {/* ****** The Search Form ****** */}
        {/* <div className="form-group user-search col-md-12">
          <label htmlFor="search">
            <h2>Search for and save materials to help you learn</h2>
          </label>
          <br />
          <br />
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="user-search-input"
            placeholder="What do you need learning help with?"
            id="search"
          />
          <div>
            <button
              type="submit"
              onClick={props.handleFormSubmit}
              className="btn btn-info btn-lg search-btn"
            >
              Search
            </button>
          </div>
        </div> */}
      </form>
    </div>
  );
}

export default Form;
