import React from "react";
import "./Tag.scss";

interface IProps {
  content: string;
}

const Tag: React.FC<IProps> = ({ content }) => (
  <div
    className={"flex-row-container flex-align-items-center tag p-1 m-r-1 m-b-1"}
  >
    <span>{content.toUpperCase()}</span>
    <span
      className="material-icons md-20 pointer"
      onClick={() => console.log("fired")}
    >
      delete_forever
    </span>
  </div>
);

export default Tag;
