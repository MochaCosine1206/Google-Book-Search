import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Bookshelf from "./pages/Bookshelf";
import NoMatch from "./pages/NoMatch";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Bookshelf} />
      <Route component={NoMatch} />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
