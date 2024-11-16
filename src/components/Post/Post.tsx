import React from "react";
import { useLocation } from "react-router-dom";
import { PostData } from "../../utils/types";

function Post({ image, description, author, date, likes }: PostData) {
  const location = useLocation();

  // TODO при наведении на картинку, посередине отображается локация
  return location.pathname === "/" ? (
    <div className="main__post">
      <div
        className="main__post-image"
        style={{ backgroundImage: "url(" + image + ")" }}
      ></div>
      <div className="main__post-container">
        <p className="main__post-description">{description}</p>
        <div className="main__post-info">
          <div className="main__post-about">
            <p className="main__post-author">{author}</p>
            <p className="main__post-date">{date}</p>
          </div>
          <div className="main__post-likes">
            <button className="main__post-like-button"></button>
            <p className="main__post-likes-value">{likes}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <li className="profile__post">
      <div
        className="profile__post-image"
        style={{ backgroundImage: "url(" + image + ")" }}
      ></div>
      <div className="profile__post-container">
        <p className="profile__post-description">{description}</p>
        <div className="profile__post-info">
          <p className="profile__post-date">{date}</p>
          <div className="profile__post-likes">
            <button className="profile__post-like-button"></button>
            <p className="profile__post-likes-value">{likes}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Post;
