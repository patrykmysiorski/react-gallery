import React from "react";
import Tag from "./Tag/Tag";

interface IProps {
  tags?: string[];
}

const TagsContainer: React.FC<IProps> = ({ tags }) => (
  <div className={"flex-row-container m-t-2 flex-wrap"}>
    {tags && tags.map((tag: string) => <Tag content={tag} />)}
  </div>
);

export default TagsContainer;
