import React from "react";
import friends from "../../friends.json";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = () => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => {
        return (
          <li className={css.friendItem} key={friend.id}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
