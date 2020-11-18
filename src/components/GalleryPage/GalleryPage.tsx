import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GALLERIES from "../../constants/galleriesData";
import IGallery from "../../models/gallery";

interface IParams {
  galleryId: string;
}

const GalleryPage: React.FC = () => {
  const { galleryId }: IParams = useParams();
  const [gallery, setGallery] = useState<IGallery>();
  useEffect(() => {
    const index = GALLERIES.findIndex(
      (gallery: IGallery) => gallery.galleryId === galleryId
    );
    setGallery(GALLERIES[index]);
  }, [galleryId]);

  return (
    <>
      {gallery && (
        <div className={"flex-row-container flex-align-items-center m-t-2"}>
          {console.log("inside", gallery)}
          <Link to={"/"}>
            <button className={"button button-primary"}>
              <div className="flex-row-container flex-align-items-center">
                <i className="material-icons md-16">arrow_back_ios</i>back to
                galleries
              </div>
            </button>
          </Link>
          <h2 className={"m-l-3"}>{`${gallery.title}`}</h2>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
