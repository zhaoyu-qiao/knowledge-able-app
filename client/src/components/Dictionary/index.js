// this is the proper component for the Dictionary
// import React, { Component } from "react";
// import DicAPI from "../../utils/DicAPI";
// import { Input, FormBtn } from "../GeneralForm";

// // Dictionary should be its own functional component and have state.
// // It should be a form with input, submit button and also a field to display the response
// // Takes in the input value and put it in search field

// class Dictionary extends Component {
//   state = {
//     result: {}, // either object or array
//     search: "",
//     word: "",
//     definition: "",
//     partOfSpeech: "",
//     examples: [],
//     pronunciation: [] // should this just be a string?
//   };

//   handleInputChange = event => {
//     console.log("Handle Input");
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     //console.log("Form submitted");
//     DicAPI.searchWord(this.state.search)
//       // .then(res => console.log)
//       .then(res => {
//         console.log(res);
//         this.setState({
//           word: res.data.word,
//           definition: res.data.results[0].definition,
//           partOfSpeech: res.data.results[0].partOfSpeech,
//           examples: res.data.results[0].examples[0],
//           pronunciation: res.data.pronunciation.all
//         });
//       })
//       .catch(err => console.log(err));
//   };

//   //   response.data.word is the word
//   //   (response.results is an array of results of explainations of the word)
//   //   response.results[i].defination   // different definations of the word
//   //   response.results[i].partOfSpeech // part of speech information
//   //   response.results[i].examples     // example sentences
//   //   response.pronunciation           // pronounciation

//   //   TODO - use map() to loop through results.
//   render() {
//     return (
//       <div>
//         <hr />
//         <hr />
//         <hr />
//         <hr />
//         <hr />
//         <hr />
//         <div>
//           <h1 id="search-img"> Search your word here </h1>
//           <form>
//             <Input
//               value={this.state.search}
//               onChange={this.handleInputChange}
//               name="search"
//               placeholder="Word (required)"
//             />
//             <FormBtn
//               disabled={!this.state.search}
//               onClick={this.handleFormSubmit}
//             >
//               Submit{" "}
//             </FormBtn>{" "}
//           </form>{" "}
//         </div>
//         <hr />
//         <div>
//           <h1> Search Result </h1>
//   <div>
//     <h3>Results will be here: </h3>
//     <br />
//     <p> Word: {this.state.word} </p>
//     <p> Definition: {this.state.definition}</p>
//     <p> Part Of Speech: {this.state.partOfSpeech} </p>
//     <p> example: {this.state.examples} </p>
//     <p> pronunciation: {this.state.pronunciation} </p>
//   </div>
// </div>
//       </div>
//     );
//   }
// }

// export default Dictionary;

// this is the proper component for the Dictionary
// This page is for testing purpose.
import React, { Component } from "react";
import DicAPI from "../../utils/DicAPI";
import { Input, FormBtn } from "../GeneralForm/index";

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
    results: [], // either object or array
    search: "",
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
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Form submitted", this.state.search);
    DicAPI.searchWord(this.state.search) //!!!seems to be undefined
      .then(res => {
        console.log("response", res);
        this.setState({
          results: res.data.results,
          word: res.data.word,
          pronunciation: res.data.pronunciation
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <h4 className="text-info"> Search your word here </h4>
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
              {this.state.results.map((result, index) => (
                <div>
                  <p>
                    <b className="text-info">Definition{index + 1}</b>:
                    {result.definition}
                  </p>

                  <p>
                    <b className="text-info">Part-Of-Speech{index + 1}</b> :
                    {result.partOfSpeech}
                  </p>
                </div>
              ))}
              {Object.keys(this.state.pronunciation).map(key => (
                <div>
                  <p>
                    <b className="text-info">Pronunciation-{key}</b>:{" "}
                    {this.state.pronunciation[key]}
                  </p>
                </div>
              ))}
              {/* {this.state.pronunciation(pron=>(
                <div>
                <p>Pronunciation:{pron}</p>
                </div>
              ))} */}

              {/* <br />
              <p> Word: {this.state.word} </p>
              <p> Definition: {this.state.definition}</p>
              <p> Part Of Speech: {this.state.partOfSpeech} </p>
              <p> example: {this.state.examples} </p>
              <p> pronunciation: {this.state.pronunciation} </p> */}
            </div>
          ) : (
            <div>
              <div> No Results Found </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Dictionary;
