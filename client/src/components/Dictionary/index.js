import React, { Component } from "react";
import DicAPI from "../../utils/DicAPI";
import { Input, FormBtn } from "../GeneralForm";

// Dictionary should be its own functional component and have state.
// It should be a form with input, submit button and also a field to display the response
// Takes in the input value and put it in search field

class Dictionary extends Component {
  state = {
    result: {}, // either object or array
    search: "",
    word: "",
    defination: "",
    partOfSpeech: "",
    examples: [],
    pronunciation: [] // should this just be a string?
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    DicAPI.searchWord()

      //   .then(console.log)
      //   .then(res =>
      //     this.setState({
      //       word: res.word
      //     })
      //   )
      .catch(err => console.log(err));
  };

  //   response.word is the word
  //   (response.results is an array of results of explainations of the word)
  //   response.results[i].defination   // different definations of the word
  //   response.results[i].partOfSpeech // part of speech information
  //   response.results[i].examples     // example sentences
  //   response.pronunciation           // pronounciation

  render() {
    return (
      <div>
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <div>
          <h1 id="search-img"> Search your word here </h1>
          <form>
            <Input
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
          <div>Results will be here </div>
        </div>
      </div>
    );
  }
}

export default Dictionary;
