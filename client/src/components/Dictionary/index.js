// this is the proper component for the Dictionary
// This page is for testing purpose.
import React, { Component } from "react";
import DicAPI from "../../utils/DicAPI";
import { Input, FormBtn } from "../GeneralForm/index";
import "./style.css";
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
  state = {
    results: [],
    search: "",
    word: "",
    defination: "",
    partOfSpeech: "",
    examples: [],
    pronunciation: {}
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
    console.log("Form submitted", this.state.search);
    DicAPI.searchWord(this.state.search)
      .then(res => {
        console.log("response", res);

        this.setState({
          results: res.data.results || ["no results"],
          word: res.data.word,
          pronunciation: res.data.pronunciation
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div
        style={{
          overflow: "scroll",
          maxHeight: "400" + "px",
        }}
      >
        <div>
          <h4 className="text-info"> Search your word here </h4>
          <form>
            <Input
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

        <div>
          <br />
          <br />
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
          {this.state.results.length > 0 ? (
            <div>
              {console.log(typeof this.state.pronunciation)}{" "}
              {typeof this.state.pronunciation == "object" ? (
                Object.keys(this.state.pronunciation).map(key => (
                  <div>
                    <p>
                      <span className="text-info">Pronunciation-{key} </span>:{" "}
                      {this.state.pronunciation[key]}
                    </p>
                  </div>
                ))
              ) : (
                <div>
                  <p>
                    <span className="text-info">Pronunciation </span>:{" "}
                    {this.state.pronunciation}
                  </p>
                </div>
              )}
              {this.state.results.map((result, index) => (
                <div>
                  <hr />
                  <p>
                    <span className="text-info">Definition {index + 1} </span>:
                    {result.definition || "Not defined"}
                  </p>

                  <p>
                    <span className="text-info">Part Of Speech </span>:
                    {result.partOfSpeech || "Not listed"}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div> Search results will be here. </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Dictionary;
