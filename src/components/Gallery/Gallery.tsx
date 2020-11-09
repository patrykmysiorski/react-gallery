import React from "react";
import "./Gallery.scss";

interface IProps {
  title: string;
  date: string;
  description: string;
}

const Gallery: React.FC<IProps> = ({ title, date, description }) => {
  return (
    <div className={"gallery-box"}>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
};

export default Gallery;
