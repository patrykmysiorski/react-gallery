import React from "react";
import "./Gallery.scss";

interface IProps {
  id: string;
  title: string;
  date: string;
  description: string;
  coverUrl: string;
}

const Gallery: React.FC<IProps> = ({
  id,
  title,
  date,
  description,
  coverUrl,
}) => {
  return (
    <div className={"gallery-box"}>
      <a href={`/gallery/${id}`}>
        <h1>{title}</h1>
        <img
          src={process.env.PUBLIC_URL + coverUrl}
          alt={"cover image"}
          width={200}
        />
        <p>{date}</p>
        <p>{description}</p>
      </a>
    </div>
  );
};

export default Gallery;
