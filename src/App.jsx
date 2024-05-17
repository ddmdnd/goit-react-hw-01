import { cloneElement, useState } from "react";
import "./App.css";
import "modern-normalize";
import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import "modern-normalize";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

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
      <TransactionHistory />
    </>
  );
};

export default App;
