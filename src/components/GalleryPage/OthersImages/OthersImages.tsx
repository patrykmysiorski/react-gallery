import React from "react";
import classNames from "classnames";
import "./OthersImages.scss";

interface IProps {
  photos: string[];
}

const OthersImages: React.FC<IProps> = ({ photos }) => (
  <div className="other-images-wrapper flex-row-container flex-align-items-center">
    <span className="material-icons md-32 pointer">arrow_back_ios</span>
    <div className="images-container">
      <div className="flex-row-container margin-bottom-10">
        {photos?.map((photoUrl: string, index) => {
          if (index < 2) {
            return (
              <div
                className={classNames("small-image", !index && "m-r-1")}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + photoUrl})`,
                }}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="flex-row-container margin-top-10">
        {photos?.map((photoUrl: string, index) => {
          if (index > 1) {
            return (
              <div
                className={classNames(
                  "small-image",
                  index === 2 ? "m-r-1" : ""
                )}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + photoUrl})`,
                }}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
    <span className="material-icons md-32 m-l-1 pointer">
      arrow_forward_ios
    </span>
  </div>
);

export default OthersImages;
