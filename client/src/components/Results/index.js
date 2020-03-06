import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

//// This Results componment is used on the Search.js page (Your Learning Journey) ////

class Results extends Component {
  state = {
    savedBooks: []
  };
  //life cycle https://reactjs.org/docs/react-component.html
  //STU Ajax form delete

  // componentDidMount() {
  //   API.savedBooks()
  //     .then(savedBooks => this.setState({ savedBooks: savedBooks }))
  //     .catch(err => console.error(err));
  // }
  //additional details/help with the search/Stu_ReactRouter/booksJS

  // When the component mounts, load all saved books
  componentDidMount() {
    this.loadSavedBooks();
  }

  // Loads all saved books and sets them to this.state.savedBooks
  loadSavedBooks = () => {
    API.savedBooks()
      .then(savedBooks => this.setState({ savedBooks: savedBooks }))
      .catch(err => console.error(err));
  };

  handleSave = book => {
    if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then(deletedBook =>
          this.setState({
            savedBooks: this.state.savedBooks.filter(
              book => book._id !== deletedBook._id
            )
          })
        )
        .catch(err => console.error(err));
    } else {
      console.log("book", book);
      API.saveBook(book)
        .then(savedBook =>
          this.setState({
            savedBooks: this.state.savedBooks.concat([savedBook])
          })
        )
        .catch(err => console.error(err));
    }
  };
  //show results
  render() {
    return (
      <div>
        {/* {!this.props.books.length ? (
          <h1 className="text-center">No Results to Display</h1>
        ) : ( */}
        <div>
          {this.props.books.map(result => (
            <div className="card mb-3 border" key={result._id}>
              <div className="row">
                <div className="col-md-2">
                  <img
                    alt={result.title}
                    className="iimg-fluid align-self-center mr-3"
                    src={result.image}
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="card-title">
                      {result.title} by {result.authors}
                    </h5>
                    <p className="card-text">{result.description}</p>
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
                        onClick={() => this.handleSave(result)}
                        className="btn badge-pill btn-outline-info mt-3"
                      >
                        {/* When the user clicks on the save button, the name of the button changes to Saved! to inform the user their selection was saved */}
                        {this.state.savedBooks
                          .map(book => book._id)
                          .includes(result._id)
                          ? "Saved!"
                          : "Save"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default Results;
