import React from "react";
import "./UserPanel.scss";
import { Link } from "react-router-dom";

const UserPanel = () => (
  <div className="user-panel p-1 flex-col-container">
    <p className={"m-b-1"}>Signed in as</p>
    <p className={"username m-b-1"}>yourUsername</p>
    <hr />
    <Link to={"profile"}>Your profile</Link>
    <hr />
    <Link to={"settings"}>Settings</Link>
    <Link to={"/"}>Sign out</Link>
  </div>
);

export default UserPanel;
