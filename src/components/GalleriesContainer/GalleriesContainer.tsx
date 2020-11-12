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
      <div className="galleries-container galleries-container flex-row-container flex-wrap">
        {galleriesArray.map((gallery: IGallery) => (
          <Gallery
            id={gallery.galleryId}
            title={gallery.title}
            date={gallery.dateCreated}
            description={gallery.description}
            coverUrl={gallery.coverUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleriesContainer;
