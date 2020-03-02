import React, { Component } from "react";
import { Input, FormBtn } from "../GeneralForm/index";

class Note extends Component {
  state = {
    note: ""
  };

  // handle input
  // hanele submit

  render() {
    return (
      <div style={{ overflow: "scroll", maxHeight: "400" + "px" }}>
        <div>
          <h4 className="text-info"> Put your notes here </h4>
          <form>
            <Input
              id="search_input"
              type="text"
              value={this.state.input}
              onChange={this.handleInputChange}
              name="input"
              placeholder="Insert your notes"
            />
            <FormBtn
              disabled={!this.state.search}
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
            Search Result{" "}
          </h4>
        </div>
      </div>
    );
  }
}

export default Note;
