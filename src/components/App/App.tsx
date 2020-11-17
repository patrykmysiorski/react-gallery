import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import News from "../News/News";
import GalleriesContainer from "../GalleriesContainer/GalleriesContainer";
import About from "../About/About";
import GalleryPage from "../GalleryPage/GalleryPage";
import { CONTACT_URL, GALLERY_URL, NEWS_URL } from "../../constants/urls";
import NavBar from "../NavBar/NavBar";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className={"app-container"}>
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
    </>
  );
};

export default App;
