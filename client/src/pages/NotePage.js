import React, { Component } from "react";
import NoteAPI from "../utils/NoteAPI";
//import Note from "../components/Note";

class NotePage extends Component {
  state = {
    savedNotes: []
  };

  componentDidMount() {
    this.loadSavedNotes();
  }

  loadSavedNotes = () => {
    NoteAPI.savedNotes()
      .then(savedNotes => this.setState({ savedNotes: savedNotes }))
      .catch(err => console.error(err));
  };

  handleDelete = id => {
    NoteAPI.deleteNote(id)
      .then(res => this.loadSavedNotes())
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container saved-materials bg-info">
        <h2 className="text-center">Your Saved Notes</h2>
        <br />
        {/* <img src="..." className="img-fluid" alt="Responsive image"></img> */}
        <div>
          {this.state.savedNotes.map(result => (
            <div className="card mb-3 border" key={result._id}>
              <div className="row">
                {/* <div className="col-md-2">
                  <img
                    alt={result.title}
                    className="img-fluid align-self-center mr-3"
                    src={result.image}
                  />
                </div> */}
                <div className="col-md-10">
                  <div className="card-body">
                    <h4 className="card-title text-info">{result.title}</h4>
                    <p className="card-text">{result.comment}</p>
                    <div>
                      <a
                        href={result.link}
                        className="btn badge-pill btn-outline-dark mt-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                      <button
                        onClick={() => this.handleDelete(result._id)}
                        className="btn badge-pill btn-outline-info mt-3 ml-3"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NotePage;
