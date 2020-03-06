import React, { Component } from "react";
import { Input, FormBtn } from "../GeneralForm/index";
import NoteAPI from "../../utils/NoteAPI";
//import { restart } from "nodemon";
class Note extends Component {
  state = {
    notes: [],
    note: {},
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
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (this.state.link.match(regex)) {
      NoteAPI.saveNote({
        title: this.state.title,
        link: this.state.link,
        comment: this.state.comment
      })
        .then(res => {
          alert("Your note is saved!");
          console.log("response", res);
          this.setState({
            note: res || ["no results"],
            comment: res.comment,
            title: res.title,
            link: res.link
          });
        })
        .catch(err => console.log(err));
    } else {
      alert("Please insert a valid url.:)");
    }
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
            Your Current Note:
          </h4>
          <div>
            <p>
              <b>Title: </b>
              {this.state.title}
            </p>
            <p>
              <b>Link: </b>
              {this.state.link}
            </p>
            <p>
              <b>Comment: </b>
              {this.state.comment}
            </p>
          </div>
          <a href="/notes" class="button">
            Check all notes here
          </a>
        </div>
      </div>
    );
  }
}

export default Note;
