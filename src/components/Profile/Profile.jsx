import React from "react";
import css from "./Profile.module.css";
import "/src/index.css";
// import "modern-normalize";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
  children,
}) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.infoUser}>
          <img className={css.userIcon} src={image} alt="User avatar" />
          <p className={css.userName}>{name}</p>
          <p className={css.userNickname}>@{tag}</p>
          <p className={css.userLocation}>{location}</p>
        </div>
        <ul className={css.listStatus}>
          <li className="itemStatusFollowers">
            <span className={css.nameStatus}>Followers</span>
            <span className={css.quantityItemStatus}>{followers}</span>
          </li>
          <li className="itemStatusViews">
            <span className={css.nameStatus}>Views</span>
            <span className={css.quantityItemStatus}>{views}</span>
          </li>
          <li className="itemStatusLikes">
            <span className={css.nameStatus}>Likes</span>
            <span className={css.quantityItemStatus}>{likes}</span>
          </li>
        </ul>
        {children}
      </div>
    </>
  );
};

export default Profile;
