import React, { useEffect } from "react";
import Gallery from "../Gallery/Gallery";
import IGallery from "../../models/gallery";
import "./GalleriesContainer.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { fetchGalleriesAction } from "../../redux/gallery/galleryActions";
import { galleriesSelector } from "../../redux/gallery/gallerySelectors";

const GalleriesContainer: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGalleriesAction());
  }, [dispatch]);

  const galleries = useSelector(galleriesSelector);

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
        {galleries &&
          galleries.map((gallery: IGallery, index: number) => {
            return (
              <Gallery
                key={gallery.galleryId}
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
