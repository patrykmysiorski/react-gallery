import React, { useState } from "react";
import Tag from "./Tag/Tag";
import "./TagsContainer.scss";

interface IProps {
  tags?: string[];
  updateGallery: Function;
}

const TagsContainer: React.FC<IProps> = ({ tags, updateGallery }) => {
  const [isEdited, setIsEdited] = useState(false);
  const handleClick = () => {
    if (isEdited) {
      updateGallery();
    }
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
