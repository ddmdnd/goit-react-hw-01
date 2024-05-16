import { cloneElement, useState } from "react";
import "./App.css";
import "modern-normalize";
import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";
import "modern-normalize";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList />
    </>
  );
};

export default App;
