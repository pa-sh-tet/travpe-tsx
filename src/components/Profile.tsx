import React from "react";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__above">
          <div className="profile__face">
            <div className="profile__avatar">
              <img
                className="profile__avatar-img"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt="avatar"
              />
            </div>
            <div className="profile__info">
              <h2 className="profile__name">John Doe</h2>
              <p className="profile__tag">@johndoe</p>
              <p className="profile__location">New York, USA</p>
              <p className="profile__summary">
                Adventure seeker | 30 countries visited | Photography enthusiast
              </p>
            </div>
          </div>
          <li className="profile__stats">
            <ul className="profile__stats-item">
              <p className="profile__stats-value">250</p>
              <p className="profile__stats-name">followers</p>
            </ul>
            <ul className="profile__stats-item">
              <p className="profile__stats-value">180</p>
              <p className="profile__stats-name">following</p>
            </ul>
            <ul className="profile__stats-item">
              <p className="profile__stats-value">42</p>
              <p className="profile__stats-name">trips</p>
            </ul>
          </li>
        </div>
        <div className="profile__bio">
          <div className="profile__about">
            <h3 className="profile__about-title">About Me</h3>
            <p className="profile__about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus eius sit velit temporibus? Totam, aut nihil.
              Explicabo placeat neque quia atque aut saepe, reiciendis quis est
              excepturi, eligendi dolorum qui!
            </p>
            <ul className="profile__about-skills">
              <li className="profile__about-skill">Adventure</li>
              <li className="profile__about-skill">Photography</li>
              <li className="profile__about-skill">Backpacking</li>
              <li className="profile__about-skill">Culture</li>
            </ul>
          </div>
          <div className="profile__travel-stats">
            <h3 className="profile__travel-stats-title">Travel Stats</h3>
            {/* TODO сделать отображение itemoв из массива через map */}
            <li className="profile__travel-stats-list">
              <ul className="profile__travel-stats-item">
                <img className="profile__travel-stats-logo" src="" alt="" />
                <p className="profile__travel-stats-name">Countries Visite</p>
                <p className="profile__travel-stats-value">
                  {/* TODO сделать подсчет статистики */}
                  30
                </p>
              </ul>
              <ul className="profile__travel-stats-item">
                <img className="profile__travel-stats-logo" src="" alt="" />
                <p className="profile__travel-stats-name">Cities Explored</p>
                <p className="profile__travel-stats-value">120+</p>
              </ul>
              <ul className="profile__travel-stats-item">
                <img className="profile__travel-stats-logo" src="" alt="" />
                <p className="profile__travel-stats-name">Flights Taken</p>
                <p className="profile__travel-stats-value">75</p>
              </ul>
              <ul className="profile__travel-stats-item">
                <img className="profile__travel-stats-logo" src="" alt="" />
                <p className="profile__travel-stats-name">Hostels Stayed</p>
                <p className="profile__travel-stats-value">50</p>
              </ul>
            </li>
          </div>
        </div>
        <div className="profile__content">
          <h2 className="profile__content-title">Recent Posts</h2>
          <li className="profile__content-list">
            <ul className="profile__post">
              <div className="profile__post-image"></div>
              <div className="profile__post-container">
                <h3 className="profile__post-title">TITle</h3>
                <p className="profile__post-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque fugiat sit nemo illo libero ipsum iure omnis veniam
                  quidem, voluptatem accusantium eaque odit magnam, minus, quod
                  vero similique quos delectus.
                </p>
                <div className="profile__post-info">
                  <p className="profile__post-date">June 15, 2021</p>
                  <div className="profile__post-communication">
                    <button className="profile__post-like"></button>
                  </div>
                </div>
              </div>
            </ul>
          </li>
        </div>
      </div>
    </section>
  );
}

export default Profile;
