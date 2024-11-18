import React from "react";
import Post from "../Post/Post";
import { PostData, UserData } from "../../utils/types";

function Profile({
  userPosts,
  currentUser,
  onAddPost,
  onPostLike,
}: {
  userPosts: PostData[];
  currentUser: UserData;
  onAddPost: () => void;
  onPostLike: () => void;
}) {
  return (
    <section className="profile">
      <div className="profile__above profile__block-style">
        <div className="profile__face">
          <div
            className="profile__avatar"
            style={{ backgroundImage: "url(" + currentUser.avatar + ")" }}
          ></div>
          <div className="profile__info">
            <h2 className="profile__name">{currentUser.name}</h2>
            <p className="profile__tag">@{currentUser.tag}</p>
            {/* <p className="profile__location">New York, USA</p> */}
            <p className="profile__summary">{currentUser.summary}</p>
          </div>
        </div>
        <li className="profile__stats">
          <ul className="profile__stats-item">
            <p className="profile__stats-value">{currentUser.followers}</p>
            <p className="profile__stats-name">followers</p>
          </ul>
          <ul className="profile__stats-item">
            <p className="profile__stats-value">{currentUser.following}</p>
            <p className="profile__stats-name">following</p>
          </ul>
          <ul className="profile__stats-item">
            <p className="profile__stats-value">{userPosts.length}</p>
            <p className="profile__stats-name">posts</p>
          </ul>
        </li>
      </div>
      <div className="profile__bio">
        <div className="profile__about profile__block-style">
          <h3 className="profile__about-title">About Me</h3>
          <p className="profile__about-text">{currentUser.aboutMe}</p>
          <ul className="profile__about-skills">
            <li className="profile__about-skill">Adventure</li>
            <li className="profile__about-skill">Photography</li>
            <li className="profile__about-skill">Backpacking</li>
            <li className="profile__about-skill">Culture</li>
          </ul>
        </div>
        {/* TODO сделать отображение локации вместо этого */}
        <div className="profile__travel-stats profile__block-style">
          <h3 className="profile__travel-stats-title">Travel Stats</h3>
          {/* TODO сделать отображение itemoв из массива через map */}
          <li className="profile__travel-stats-list">
            <ul className="profile__travel-stats-item">
              <div className="profile__travel-stats-logo"></div>
              <p className="profile__travel-stats-name">Countries Visite</p>
              <p className="profile__travel-stats-value">
                {/* TODO сделать подсчет статистики */}
                30
              </p>
            </ul>
            <ul className="profile__travel-stats-item">
              {/* TODO иконки загрузить */}
              <div className="profile__travel-stats-logo"></div>
              <p className="profile__travel-stats-name">Cities Explored</p>
              <p className="profile__travel-stats-value">120+</p>
            </ul>
            <ul className="profile__travel-stats-item">
              <div className="profile__travel-stats-logo"></div>
              <p className="profile__travel-stats-name">Flights Taken</p>
              <p className="profile__travel-stats-value">75</p>
            </ul>
            <ul className="profile__travel-stats-item">
              <div className="profile__travel-stats-logo"></div>
              <p className="profile__travel-stats-name">Hostels Stayed</p>
              <p className="profile__travel-stats-value">50</p>
            </ul>
          </li>
        </div>
      </div>
      <div className="profile__content">
        <h2 className="profile__content-title">Recent Posts</h2>
        <ul className="profile__content-list">
          <button
            className="profile__content-add-button block-style"
            onClick={onAddPost}
          >
            <div className="profile__content-add-logo"></div>
            <p className="profile__content-add-text">Add New Post</p>
          </button>
          {userPosts.map((post, index) => (
            <Post
              key={index}
              {...post}
              onPostLike={onPostLike}
              currentUser={currentUser}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Profile;
