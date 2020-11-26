import React from "react";
import "./Tag.scss";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { deleteTagAction } from "../../../redux/gallery/tag/tagActions";

interface IProps {
  content: string;
  isEdited: boolean;
}

const Tag: React.FC<IProps> = ({ content, isEdited }) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className={"flex-row-container flex-align-items-center tag p-1 m-r-1"}>
      <span>{content.toUpperCase()}</span>
      {isEdited && (
        <span
          className="material-icons md-20 pointer"
          onClick={() => dispatch(deleteTagAction(content))}
        >
          delete_forever
        </span>
      )}
    </div>
  );
};

export default Tag;
