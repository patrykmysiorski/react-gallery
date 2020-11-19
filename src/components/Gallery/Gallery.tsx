import React from "react";
import "./Gallery.scss";
import { Link } from "react-router-dom";
import moment from "moment";
import classnames from "classnames";
import { addDots } from "../../utils/stringUtils";

interface IProps {
  id: string;
  title: string;
  date: Date;
  description: string;
  coverUrl: string;
  backgroundColor: boolean;
}

const Gallery: React.FC<IProps> = ({
  id,
  title,
  date,
  description,
  coverUrl,
  backgroundColor,
}) => {
  return (
    <div
      className={classnames(
        "gallery-box",
        `${backgroundColor && "background-color"}`
      )}
    >
      <Link to={`/gallery/${id}`}>
        <div
          className="picture-box"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + coverUrl})`,
          }}
        />
        <div
          className={classnames(
            "gallery-box__info",
            "p-2",
            "flex-col-container",
            "flex-justify-end"
          )}
        >
          <h3 className={"m-b-1"}>{title}</h3>
          <span>{addDots(description, 200)}</span>
          <div className="date">
            <i>
              <p>{moment(date).format("DD.MM.YYYY")}</p>
            </i>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Gallery;
