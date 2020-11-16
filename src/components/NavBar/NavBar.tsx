import React from "react";
import classNames from "classnames";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { NEWS_URL } from "../../constants/urls";
import "./NavBar.scss";

const NavBar = () => (
  <header>
    <div className={"header"}>
      <div
        className={classNames(
          "logo-part",
          "flex-row-container",
          "flex-align-items-center"
        )}
      >
        <img className={"logo"} src={logo} alt="app logo" height={70} />
        <h2>React Gallery</h2>
      </div>
      <div className="buttons flex-row-container flex-justify-end">
        <Link to={"/"}>Galleries</Link>
        <Link to={`${NEWS_URL}`}>News</Link>
      </div>
      {/*<Link to={"/"}>*/}
      {/*  <button>Galleries</button>*/}
      {/*</Link>*/}
      {/*<Link to={`${CONTACT_URL}`}>*/}
      {/*  <button type="button" className={"contact-button"}>*/}
      {/*    Contact us*/}
      {/*  </button>*/}
      {/*</Link>*/}
    </div>
  </header>
);

export default NavBar;
