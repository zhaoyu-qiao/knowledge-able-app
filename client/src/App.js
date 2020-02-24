import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import About from "./pages/About";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Dictionary from "./components/Dictionary";
// import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          {/* <Header /> */}
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/dictionary" component={Dictionary} />

            {/* <Route exact path="/noMatch" component={NoMatch} /> */}
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
