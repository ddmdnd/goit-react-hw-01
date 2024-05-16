import React from "react";
import friends from "../../friends.json";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = () => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li>
            <FriendListItem
              key={friend.id}
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
