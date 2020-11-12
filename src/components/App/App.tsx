import React from "react";
import "./App.scss";
import logo from "../../logo.svg";
import { Link, Route, Switch } from "react-router-dom";
import News from "../News/News";
import GalleriesContainer from "../GalleriesContainer/GalleriesContainer";
import About from "../About/About";
import GalleryPage from "../GalleryPage/GalleryPage";
import {
  CONTACT_URL,
  GALLERY_URL,
  HOME_URL,
  NEWS_URL,
} from "../../constants/urls";

const App: React.FC = () => {
  console.log(NEWS_URL);
  console.log(HOME_URL);
  return (
    <div className={"app-container"}>
      <header>
        <div className={"header"}>
          <img className={"logo"} src={logo} alt="app logo" height={70} />
          <nav>
            <ul className={"nav__links"}>
              <li>
                <Link to={"/"}>Galleries</Link>
              </li>
              <li>
                <Link to={`${NEWS_URL}`}>News</Link>
              </li>
            </ul>
          </nav>
          <Link to={`${CONTACT_URL}`}>
            <button type="button" className={"contact-button"}>
              Contact us
            </button>
          </Link>
        </div>
      </header>
      <div className="app-content">
        <Switch>
          <Route exact path={"/"}>
            <GalleriesContainer />
          </Route>
          <Route path={`${NEWS_URL}`}>
            <News />
          </Route>
          <Route path={`${CONTACT_URL}`}>
            <About />
          </Route>
          <Route path={`${GALLERY_URL}`}>
            <GalleryPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
