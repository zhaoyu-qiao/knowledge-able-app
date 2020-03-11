import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import About from "./pages/About";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Dictionary from "./components/Dictionary";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotePage from "./pages/NotePage";

class App extends Component {
  state = {
    isAuthed: false
  };

  // toggle function to switch between, If a user is logged in, display the logout link. If no user is logged in, then display the sign up and sign in links.
  toggle = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar user={this.state.user} />
          {/* <Header /> */}
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/dictionary" component={Dictionary} />
            <Route
              exact
              path="/login"
              render={() => (
                <Login toggle={this.toggle} isAuthed={this.state.isAuthed} />
              )}
            />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/notes" component={NotePage} />

            {/* <Route exact path="/noMatch" component={NoMatch} /> */}
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
