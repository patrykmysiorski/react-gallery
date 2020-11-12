import React from "react";
import "./App.scss";
import logo from "../../logo.svg";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import News from "../News/News";
import GalleriesContainer from "../GalleriesContainer/GalleriesContainer";
import About from "../About/About";
import GalleryPage from "../GalleryPage/GalleryPage";

const App: React.FC = () => {
  return (
    <div className={"app-container"}>
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
            <Route exact path="/">
              <GalleriesContainer />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/contact">
              <About />
            </Route>
            <Route path={"/gallery/:galleryId"} component={GalleryPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
