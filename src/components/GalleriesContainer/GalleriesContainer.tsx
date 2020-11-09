import React from "react";
import GALLERIES from "../../constants/galleriesData";
import Gallery from "../Gallery/Gallery";
import IGallery from "../../models/gallery";
import "./GalleriesContainer.scss";

const GalleriesContainer: React.FC = () => {
  const galleriesArray = GALLERIES.concat(GALLERIES);
  return (
    <div>
      <h1>My travels</h1>
      <div className="flex-row-container flex-justify-space-around galleries-container flex-wrap">
        {galleriesArray.map((gallery: IGallery) => (
          <Gallery
            title={gallery.title}
            date={gallery.dateCreated.toISOString()}
            description={gallery.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleriesContainer;
