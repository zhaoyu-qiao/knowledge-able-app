import React, { Component } from "react";
import { Input, FormBtn } from "../GeneralForm/index";
import NoteAPI from "../../utils/NoteAPI";
class Note extends Component {
  state = {
    notes: [],
    comment: "",
    title: "",
    link: ""
  };

  handleInputChange = event => {
    console.log("Handle Input");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Form submitted", this.state.title);
    NoteAPI.saveNote({
      title: this.state.title,
      link: this.state.link,
      comment: this.state.comment
    })
      .then(() => console.log)
      .catch(err => console.log(err));
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
