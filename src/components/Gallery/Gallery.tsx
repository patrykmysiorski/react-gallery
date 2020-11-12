import React from "react";
import "./Gallery.scss";
import { Link } from "react-router-dom";

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
      <Link to={`/gallery/${id}`}>
        <h1>{title}</h1>
        <div className="picture-box">
          <img src={process.env.PUBLIC_URL + coverUrl} alt={"cover"} />
        </div>
        <p>{date}</p>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default Gallery;
