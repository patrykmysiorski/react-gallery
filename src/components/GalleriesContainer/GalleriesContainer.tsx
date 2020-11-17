import React from "react";
import GALLERIES from "../../constants/galleriesData";
import Gallery from "../Gallery/Gallery";
import IGallery from "../../models/gallery";
import "./GalleriesContainer.scss";
import classNames from "classnames";

const GalleriesContainer: React.FC = () => {
  const galleriesArray = GALLERIES.concat(GALLERIES);
  return (
    <div>
      <h1 className={"m-t-2"}>My galleries</h1>
      <div
        className={classNames(
          "galleries-container",
          "flex-row-container",
          "flex-wrap",
          "m-t-2"
        )}
      >
        {galleriesArray.map((gallery: IGallery, index: number) => {
          return (
            <Gallery
              id={gallery.galleryId}
              title={gallery.title}
              date={gallery.dateCreated}
              description={gallery.description}
              coverUrl={gallery.coverUrl}
              backgroundColor={index % 2 === 0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GalleriesContainer;
