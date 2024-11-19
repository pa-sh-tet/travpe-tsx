import React from "react";
import { useLocation } from "react-router-dom";
import { PostData, UserData } from "../../utils/types";

function Post({
  image,
  description,
  author,
  date,
  likes,
  onPostLike,
  currentUser,
  placeLocation,
  onPostDelete,
}: PostData & {
  onPostLike: (post: PostData) => void;
  onPostDelete: (post: PostData) => void;
} & {
  currentUser: UserData;
}) {
  const location = useLocation();
  const isLiked = likes.includes(currentUser.tag);

  const handleLikeClick = () => {
    const newLikes = isLiked
      ? likes.filter((tag) => tag !== currentUser.tag)
      : [...likes, currentUser.tag];
    onPostLike({
      image,
      description,
      author,
      date,
      placeLocation,
      likes: newLikes,
    });
  };

  const handleDeleteClick = () => {
    onPostDelete({
      image,
      description,
      author,
      date,
      placeLocation,
      likes,
    });
  };

  // TODO при наведении на картинку, посередине отображается локация
  return location.pathname === "/" ? (
    <div className="main__post">
      <div
        className="main__post-image"
        // TODO при не совпадении картинки и блока, на фоне дублировать размытую картинку
        style={{ backgroundImage: "url(" + image + ")" }}
      ></div>
      <div className="main__post-container">
        <p className="main__post-description">{description}</p>
        <div className="main__post-info">
          <div className="main__post-about">
            <p className="main__post-author">{author}</p>
            <p className="main__post-date">{date}</p>
          </div>
          <div className="main__post-location">
            <div className="main__post-location-icon"></div>
            {/* TODO Добавить отоюражение локации в гугл картах */}
            <p className="main__post-location-value">{placeLocation}</p>
          </div>
          <div className="main__post-likes">
            <button
              className={`main__post-like-button ${
                isLiked ? "profile__post-like-button_active" : ""
              }`}
              onClick={handleLikeClick}
            ></button>
            <p className="main__post-likes-value">{likes.length}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    // TODO Добавить локацию как в main
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
            <button
              className={`profile__post-like-button ${
                isLiked ? "profile__post-like-button_active" : ""
              }`}
              onClick={handleLikeClick}
            ></button>
            <p className="profile__post-likes-value">{likes.length}</p>
          </div>
        </div>
      </div>
      <button
        className="profile__post-delete"
        onClick={handleDeleteClick}
      ></button>
    </li>
  );
}

export default Post;
