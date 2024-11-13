import React from "react";
// import HeartIcon from "../images/HeartIcon.svg";

function Profile() {
  return (
    <section className="profile">
      {/* <div className="profile__container"> */}
      <div className="profile__above profile__block-style">
        <div className="profile__face">
          <div className="profile__avatar"></div>
          <div className="profile__info">
            <h2 className="profile__name">John Doe</h2>
            <p className="profile__tag">@johndoe</p>
            {/* <p className="profile__location">New York, USA</p> */}
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
            <p className="profile__stats-name">posts</p>
          </ul>
        </li>
      </div>
      <div className="profile__bio">
        <div className="profile__about profile__block-style">
          <h3 className="profile__about-title">About Me</h3>
          <p className="profile__about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus eius sit velit temporibus? Totam, aut nihil. Explicabo
            placeat neque quia atque aut saepe, reiciendis quis est excepturi,
            eligendi dolorum qui!
          </p>
          <ul className="profile__about-skills">
            <li className="profile__about-skill">Adventure</li>
            <li className="profile__about-skill">Photography</li>
            <li className="profile__about-skill">Backpacking</li>
            <li className="profile__about-skill">Culture</li>
          </ul>
        </div>
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
          <li className="profile__post">
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
          </li>
          <li className="profile__post">
            <div className="profile__post-image"></div>
            <div className="profile__post-container">
              <h3 className="profile__post-title">sdfsdfsdf</h3>
              <p className="profile__post-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque fugiat sit nemo illo libero ipsum iure omnis veniam
                quidem, voluptatem accusantium eaque odit magnam, minus, quod
                vero similique quos delectus.
              </p>
              <div className="profile__post-info">
                <p className="profile__post-date">June 15, 2021</p>
                <div className="profile__post-communication">
                  <button className="profile__post-like" ></button>
                </div>
              </div>
            </div>
          </li>
          <li className="profile__post">
            <div className="profile__post-image"></div>
            <div className="profile__post-container">
              <h3 className="profile__post-title">TITle</h3>
              <p className="profile__post-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium officiis ex saepe corrupti ullam amet cumque optio.
                Molestiae, voluptatibus veniam.
              </p>
              <div className="profile__post-info">
                <p className="profile__post-date">June 15, 2021</p>
                <div className="profile__post-communication">
                  <button className="profile__post-like"></button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Profile;
