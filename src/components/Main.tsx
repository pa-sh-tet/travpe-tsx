import React from "react";

function Main() {
  return (
    <section className="main">
      <div className="main__info-column">
        <div className="main__profile block-style">
          <div className="main__profile-face">
            <div className="main__profile-avatar"></div>
            <div className="main__profile-info">
              <h3 className="main__profile-name">John Doe</h3>
              <p className="main__profile-tag">@johndoe</p>
            </div>
          </div>
          <div className="main__profile-stats">
            <div className="main__profile-stats-item">
              <p className="main__profile-stats-value">250</p>
              <p className="main__profile-stats-name">Posts</p>
            </div>
            <div className="main__profile-stats-item">
              <p className="main__profile-stats-value">250</p>
              <p className="main__profile-stats-name">Posts</p>
            </div>
            <div className="main__profile-stats-item">
              <p className="main__profile-stats-value">250</p>
              <p className="main__profile-stats-name">Posts</p>
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
              <p className="main__destinations-item-name">Bali, Indonesia</p>
            </li>
            <li className="main__destinations-item">
              <div className="main__destinations-item-image"></div>
              <p className="main__destinations-item-name">Bali, Indonesia</p>
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
      <div className="main__posts-column"></div>
    </section>
  );
}

export default Main;
