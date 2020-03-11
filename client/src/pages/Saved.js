import React, { Component } from "react";
// import API from "../utils/API";
import Youtube from '../components/Youtube'; 

class Saved extends Component {
  render() {
    return (
      <div className="App">
<Youtube />
      </div>
    );
  }
}

export default Saved;



















// class Saved extends Component {
//   state = {
//     savedBooks: []
//   };

//   componentDidMount() {
//     API.savedBooks()
//       .then(savedBooks => this.setState({ savedBooks: savedBooks }))
//       .catch(err => console.error(err));
//   }

//   render() {
//     return (
//       <div className="container saved-materials bg-info">
//         <h2 className="text-center">Your Saved Learning Materials</h2>
//         <br />
        
//         <br />
//         {/* <img src="..." className="img-fluid" alt="Responsive image"></img> */}
//         <SavedBooks books={this.state.savedBooks} />
//       </div>
//     );
//   }
// }

// export default Saved;
