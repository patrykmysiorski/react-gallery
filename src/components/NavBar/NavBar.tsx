import React, { useState } from "react";
import classNames from "classnames";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { NEWS_URL } from "../../constants/urls";
import "./NavBar.scss";
import UserPanel from "../UserPanel/UserPanel";

const NavBar = () => {
  const avatarUrl = "/img/user/user.jpeg";
  const [userPanelhidden, setUserPanelHidden] = useState(true);
  return (
    <header>
      <div className={"header"}>
        <Link to={"/"}>
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
        </Link>
        <div className="links-part flex-row-container">
          <div className="buttons flex-row-container flex-justify-end">
            <Link to={"/"}>Galleries</Link>
            <Link to={`${NEWS_URL}`}>News</Link>
          </div>
          <div
            className="user-panel-header m-r-1 m-l-1"
            onClick={() => setUserPanelHidden(!userPanelhidden)}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + avatarUrl})`,
            }}
          />
        </div>
      </div>
      {!userPanelhidden && <UserPanel />}
    </header>
  );
};

export default NavBar;
