import clsx from "clsx";
import React from "react";
import css from "./FriendListItem.module.css";

const FriendListItem = (friends) => {
  const friend = clsx(friends.isOnline ? css.isOnline : css.offLine);
  const isLine = clsx(friends.isOnline ? "Online" : "Offline");
  return (
    <>
      <div>
        <img src={friends.avatar} alt="Avatar" width="48" />
        <p>{friends.name}</p>
        <p className={friend}>{isLine}</p>
      </div>
    </>
  );
};

export default FriendListItem;
