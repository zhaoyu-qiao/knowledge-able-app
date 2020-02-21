import React, { Component } from "react";
import API from "../../utils/API";


//// This Results componment is used on the Search.js page (Your Learning Journey) ////

class Results extends Component {

    state = {
        savedBooks: [],
    }

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


    // Deletes a saved book from the database with a given id, then reloads saved books from the db
    // handleSave = book => {

    //     API.deleteBook(book._id)
    //         .then(res => this.loadSavedBooks())
    //         .catch(err => console.log(err));

    //     API.saveBook(book)
    //         .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
    //         .catch(err => console.error(err));

    // }



    // Deletes a saved book from the database with a given id, then reloads saved books from the db
    handleSave = book => {
        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }







    render() {
        return (
            <div>
                {/* {!this.props.books.length ? (
                    <h2 className="text-center">No Results to Display</h2>
                ) : ( */}
                <div>
                    {this.props.books.map(result => (
                        <div className="card mb-3 border" key={result._id}>
                            <div className="row">
                                <div className="col-md-2">
                                    <img alt={result.title} className="img-fluid align-self-center mr-3" src={result.image} />
                                </div>
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h4 className="card-title text-info">{result.title} by {result.authors}</h4>
                                        <p className="card-text">{result.description}</p>
                                        <div>
                                            <a href={result.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank"
                                                rel="noopener noreferrer">View</a>
                                            <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-info mt-3 ml-3" >
                                                {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
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
        )
    }
}

export default Results;