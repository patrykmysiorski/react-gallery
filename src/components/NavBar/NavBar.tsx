import React from "react";
import "./NavBar.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import GalleriesContainer from "../GalleriesContainer/GalleriesContainer";
import About from "../About/About";

const NavBar: React.FC = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <GalleriesContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
