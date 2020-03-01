import React, { Component } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks";

class Saved extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    API.savedBooks()
      .then(savedBooks => this.setState({ savedBooks: savedBooks }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container saved-materials bg-info">
        <h2 className="text-center">Your Saved Learning Materials</h2>
        <br />
        {/* <div className="media">
                    <img src="https://www.sweetrush.com/wp-content/uploads/2018/04/eLearning.png" class="mr-3" alt="..." />
                    <div className="media-body">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h5 className="mt-0">Media heading</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                        <br />
                        <br />
                        <i className="far fa-arrow-alt-circle-down "></i>
                    </div>
                    <br />
                    <br />

                </div> */}

        <br />
        {/* <img src="..." className="img-fluid" alt="Responsive image"></img> */}
        <SavedBooks books={this.state.savedBooks} />
      </div>
    );
  }
}

export default Saved;
