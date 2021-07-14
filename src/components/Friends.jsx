import React from 'react';
import '../CSS/Profile.css';

function Friends() {
  return (
    <div className="pageContainer">
      <ul className="navFriendContainer">
        <li className="displayNav">Friends</li>
        <li className="navFriend">Online</li>
        <li className="navFriend">All</li>
        <li className="navFriend">Waiting</li>
        <li className="navFriend">Blocked</li>
        <li className="navFriend"><button className="addFriend" type="button">Add friend</button></li>
      </ul>
      <h1>hello</h1>
    </div>
  );
}

export default Friends;
