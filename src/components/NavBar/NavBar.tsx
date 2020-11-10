import React from "react";
import "./NavBar.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import GalleriesContainer from "../GalleriesContainer/GalleriesContainer";
import About from "../About/About";
import logo from "../../logo.svg";
import News from "../News/News";

const NavBar: React.FC = () => {
  return (
    <Router>
      <header>
        <div className={"header"}>
          <img className={"logo"} src={logo} alt="app logo" height={70} />
          <nav>
            <ul className={"nav__links"}>
              <li>
                <Link to="/">Galleries</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </nav>
          <Link to="/contact">
            <button type="button" className={"contact-button"}>
              Contact us
            </button>
          </Link>
        </div>
      </header>
      <div className="app-content">
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route exact path="/">
            <GalleriesContainer />
          </Route>
          <Route path="/contact">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
