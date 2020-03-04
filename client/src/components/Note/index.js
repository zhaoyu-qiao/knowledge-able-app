import React, { Component } from "react";
import { Input, FormBtn } from "../GeneralForm/index";

class Note extends Component {
  state = {
    comment: "",
    title: "",
    link: ""
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
              id="title_input"
              type="text"
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title_input"
              placeholder="Your note title"
            />
            <b>Link:</b>
            <Input
              id="link_input"
              type="text"
              value={this.state.link}
              onChange={this.handleInputChange}
              name="link_input"
              placeholder="Put the link you like here"
            />
            <b>Comment:</b>
            <Input
              id="comment_input"
              type="text"
              value={this.state.comment}
              onChange={this.handleInputChange}
              name="comment_input"
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
