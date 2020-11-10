import React from "react";
import { useParams } from "react-router-dom";

interface IParams {
  galleryId: string;
}

const GalleryPage: React.FC = () => {
  const params: IParams = useParams();
  return <h1>{`gallery page with id ${params.galleryId}`}</h1>;
};

export default GalleryPage;
