import React from "react";
import "./About.scss";

const About: React.FC = () => {
  const texts = [
    "text here text here text here text here text here text here text\n" +
      "              here text here text here text here text here text here text here\n" +
      "              text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here ",
    "text here text here text here",
  ];
  return (
    <>
      {texts.map((text: string) => (
        <div className="single-item">
          <div id="photo">
            <p>photo here</p>
          </div>
          {/*<div id="info">*/}
          <div id="text">
            <p>{text}</p>
          </div>
          <div id="footer">
            <p>foot here</p>
          </div>
          {/*</div>*/}
        </div>
      ))}
    </>
  );
};

export default About;
