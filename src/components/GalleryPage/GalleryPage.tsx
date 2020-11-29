import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import TagsContainer from "../TagsContainer/TagsContainer";
import { useDispatch, useSelector } from "react-redux";
import { currentGallerySelector } from "../../redux/gallery/gallerySelectors";
import { AppDispatch } from "../../redux/store";
import {
  fetchGalleryStartAction,
  updateGalleryStartAction,
} from "../../redux/gallery/galleryActions";
import { RootState } from "../../redux/rootReducer";
import IGallery from "../../models/gallery";
import "./GalleryPage.scss";
import OthersImages from "./OthersImages/OthersImages";

interface IParams {
  galleryId: string;
}

const GalleryPage: React.FC = () => {
  const { galleryId }: IParams = useParams();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGalleryStartAction(galleryId));
  }, [dispatch, galleryId]);
  const gallery: IGallery = useSelector<RootState, IGallery>((state) =>
    currentGallerySelector(state)
  );
  const updateGallery = (): void => {
    dispatch(
      updateGalleryStartAction({
        galleryId: gallery.galleryId,
        tags: gallery.tags,
      })
    );
  };
  return (
    <>
      {gallery && (
        <>
          <div
            className={"flex-row-container flex-align-items-center m-t-2 m-b-1"}
          >
            <Link to={"/"}>
              <button className={"button button-primary"}>
                <div className="flex-row-container flex-align-items-center">
                  <i className="material-icons md-16">arrow_back_ios</i>back to
                  galleries
                </div>
              </button>
            </Link>
            <h2 className={"m-l-3"}>{`${gallery.title}, ${moment(
              gallery.dateCreated
            ).format("DD MMMM YYYY")}`}</h2>
          </div>
          <hr />
          <TagsContainer tags={gallery.tags} updateGallery={updateGallery} />
          <div className="photos-container flex-row-container flex-justify-space-between">
            <div
              className="main-photo"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + gallery.coverUrl
                })`,
              }}
            />
            <div className="vertical-line" />
            <OthersImages photos={gallery.photos} />
          </div>
        </>
      )}
    </>
  );
};

export default GalleryPage;
