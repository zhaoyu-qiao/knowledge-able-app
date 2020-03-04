import React from "react";
import "./style.css";

//// This Form component is the search "form" page (Your Learning Journey) ////

function Form(props) {
  return (
    <div className="container search-form">
      <h2 className="text-center">Common Learning Disabilities</h2>
      <br />
      <h4 className="text-center">
        See the below images for our suggested resources on the learning
        disability
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

        {/* ****** The Search Form ****** */}
        <div className="form-group user-search col-md-12">
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
        </div>
      </form>
    </div>
  );
}

export default Form;

// import React from "react";

// // This file exports the Input, TextArea, and FormBtn components

// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }
