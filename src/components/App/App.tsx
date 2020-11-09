import React from "react";
import "./App.scss";
import NavBar from "../NavBar/NavBar";

const App: React.FC = () => {
  return (
    <div className={"app-container"}>
      <NavBar />
    </div>
  );
};

export default App;
