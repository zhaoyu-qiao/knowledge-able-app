import React, { Component } from "react";
import { Input, FormBtn } from "../GeneralForm/index";
// import noteController from "../../../../controllers/notesController";

class Note extends Component {
  state = {
    comment: "",
    title: "",
    link: ""
  };

  handleInputChange = event => {
    //console.log("Handle Input");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Form submitted", this.state.title);
    // routes need to be added to routes folder, server needs to use them.
    // here goes the create note document function.
    // DicAPI.searchWord(this.state.search)
    //   .then(res => {
    //     console.log("response", res);

    //     this.setState({
    //       results: res.data.results || ["no results"],
    //       word: res.data.word,
    //       pronunciation: res.data.pronunciation
    //     });
    //   })
    //   .catch(err => console.log(err));
  };

  // handle input
  // hanele submit

  render() {
    return (
      <div style={{ overflow: "scroll", maxHeight: "400" + "px" }}>
        <div>
          <h4 className="text-info"> Put your notes here </h4>
          <form>
            <b>Title:</b>
            <Input
              id="title"
              type="text"
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Your note title"
            />
            <b>Link:</b>
            <Input
              id="link"
              type="text"
              value={this.state.link}
              onChange={this.handleInputChange}
              name="link"
              placeholder="Put the link you like here"
            />
            <b>Comment:</b>
            <Input
              id="comment"
              type="text"
              value={this.state.comment}
              onChange={this.handleInputChange}
              name="comment"
              placeholder="Comment here"
            />
            <FormBtn
              disabled={!this.state.title || !this.state.comment}
              onClick={this.handleFormSubmit}
            >
              Submit{" "}
            </FormBtn>{" "}
          </form>{" "}
        </div>
        <hr />
        <div>
          <h4
            className="text-info"
            style={{
              marginTop: 20 + "px",
              paddingTop: 10 + "px",
              textAlign: "left"
            }}
          >
            {" "}
            Note Result{" "}
          </h4>
        </div>
      </div>
    );
  }
}

export default Note;
