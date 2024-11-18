import React from "react";
import Post from "../Post/Post";
import { PostData, UserData } from "../../utils/types";

function Main({
  posts,
  onAddPost,
  currentUser,
  onPostLike
}: {
  posts: PostData[];
  onAddPost: () => void;
  currentUser: UserData;
  onPostLike: () => void
}) {
  return (
    <section className="main">
      <div className="main__info-column">
        <div className="main__profile block-style">
          <div className="main__profile-face">
            <div
              className="main__profile-avatar"
              style={{ backgroundImage: "url(" + currentUser.avatar + ")" }}
            ></div>
            <div className="main__profile-info">
              <h3 className="main__profile-name">{currentUser.name}</h3>
              <p className="main__profile-tag">@{currentUser.tag}</p>
            </div>
          </div>
          <div className="main__profile-stats">
            <div className="main__profile-stats-item">
              <p className="main__profile-stats-value">{posts.length}</p>
              <p className="main__profile-stats-name">Posts</p>
            </div>
            <div className="main__profile-stats-item">
              <p className="main__profile-stats-value">
                {currentUser.followers}
              </p>
              <p className="main__profile-stats-name">Followers</p>
            </div>
            <div className="main__profile-stats-item">
              <p className="main__profile-stats-value">
                {currentUser.following}
              </p>
              <p className="main__profile-stats-name">Following</p>
            </div>
          </div>
        </div>
        <div className="main__destinations block-style">
          {/* TODO сделать через массив, можно также сделать слайдер */}
          <h2 className="main__destinations-title">Trending Destinations</h2>
          <ul className="main__destinations-list">
            <li className="main__destinations-item">
              <div className="main__destinations-item-image"></div>
              <p className="main__destinations-item-name">Bali, Indonesia</p>
            </li>
            <li className="main__destinations-item">
              <div className="main__destinations-item-image"></div>
              <p className="main__destinations-item-name">Santorini, Greece</p>
            </li>
            <li className="main__destinations-item">
              <div className="main__destinations-item-image"></div>
              <p className="main__destinations-item-name">Tokyo, Japan</p>
            </li>
          </ul>
        </div>
        <div className="main__tags block-style">
          <h2 className="main__tags-title">Trending Tags</h2>
          <ul className="main__tags-list">
            <li className="main__tags-item">#beachlife</li>
            <li className="main__tags-item">#beachlife</li>
            <li className="main__tags-item">#beachlife</li>
            <li className="main__tags-item">#beachlife</li>
            <li className="main__tags-item">#beachlife</li>
          </ul>
        </div>
      </div>
      <div className="main__posts-column">
        <button
          className="main__post-add-button block-style"
          onClick={onAddPost}
        >
          <div className="main__post-add-button-icon"></div>Create new post
        </button>
        <div className="main__posts">
          {posts.map((post, index) => (
            <Post key={index} {...post} onPostLike={onPostLike} currentUser={currentUser} />
          ))}
        </div>
      </div>
    </section>
  );
}

// TODO добавить попап формы добавления поста
// {/* <form className="main__form block-style">
//   <input
//     placeholder="Share your travel experience..."
//     type="text"
//     className="main__form-text-input"
//   />
//   <div className="main__form-container">
//     <div className="main__form-inputs">
//       <input type="file" className="main__form-image-input" />
//       <input type="text" className="main__form-location-input" />
//     </div>
//     <button className="main__form-button">POST</button>
//   </div>
// </form> */}

export default Main;
