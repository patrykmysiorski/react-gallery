import React from "react";
import "./Gallery.scss";
import { Link } from "react-router-dom";
import moment from "moment";

interface IProps {
  id: string;
  title: string;
  date: Date;
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
        <div className="picture-box">
          <img src={process.env.PUBLIC_URL + coverUrl} alt={"cover"} />
        </div>
        <div className="gallery-box__info">
          <p>{moment(date).format("DD.MM.YYYY, HH:MM")}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Gallery;
