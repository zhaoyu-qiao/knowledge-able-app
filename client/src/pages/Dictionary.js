// This page is for testing purpose.
import React, { Component } from "react";
import DicAPI from "../utils/DicAPI";
import { Input, FormBtn } from "../GeneralForm";

// Dictionary should be its own functional component and have state.
// It should be a form with input, submit button and also a field to display the response
// Takes in the input value and put it in search field
// ============  RES FORMAT  ==============
// response.word is the word
// (response.results is an array of results of explainations of the word)
// response.results[i].defination   // different definations of the word
// response.results[i].partOfSpeech // part of speech information
// response.results[i].examples     // example sentences
// response.pronunciation           // pronounciation

class Dictionary extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    results: [], // either object or array
    search: "Hello",
    word: "",
    defination: "",
    partOfSpeech: "",
    examples: [],
    pronunciation: {} // it is an object coming back from res
  };

  // !!! This function is not triggering? Does css has anything to do with it?
  handleInputChange = event => {
    //console.log("Handle Input");
    const { name, value } = event.target;
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //console.log("Form submitted");
    DicAPI.searchWord(this.state.search) //!!!seems to be undefined
      .then(res =>
        this.setState({
          word: res.word
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <h1 id="img"> Search your word here </h1>
          <form>
            <input
              id="search_input"
              type="text"
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholder="Word (required)"
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
          <h1> Search Result </h1>
          <div> Results Will Be Here </div>
        </div>
      </div>
    );
  }
}

export default Dictionary;
