import React, { useEffect, useState } from "react";
import Tag from "./Tag/Tag";
import "./TagsContainer.scss";

interface IProps {
  tags?: string[];
}

const TagsContainer: React.FC<IProps> = ({ tags }) => {
  const [isEdited, setIsEdited] = useState(false);

  const startFetch = () => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => console.log("get ", res));
  };
  useEffect(() => {
    startFetch();
  }, []);

  const object = {
    test: "testyyy",
  };
  const handleClick = () => {
    fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((result) => result.json())
      .then((info) => {
        console.log(info);
      });
  };

  return (
    <div className={"tags-container flex-row-container m-t-2 flex-wrap"}>
      {tags &&
        tags.map((tag: string, index) => (
          <Tag content={tag} key={index} isEdited={isEdited} />
        ))}
      <button
        className={"button button-edit"}
        onClick={() => {
          setIsEdited(!isEdited);
          handleClick();
        }}
      >
        <div className="flex-row-container flex-align-items-center">
          <i className="material-icons md-20">{isEdited ? "done" : "create"}</i>
        </div>
      </button>
    </div>
  );
};

export default TagsContainer;
