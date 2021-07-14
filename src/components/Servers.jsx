import React from 'react';
import '../CSS/Servers.css';

function Servers() {
  return (
    <div className="pageContainer">
      <div className="TitleServer">
        <h1>Your Servers</h1>
      </div>
      <div className="gridServer">
        <button className="serverButton" type="button">Unicorns</button>
        <button className="serverButton" type="button">Gaming</button>
        <button className="serverButton" type="button">Music</button>
        <button className="serverButton" type="button">CrowCrew</button>
        <button className="serverButton" type="button">OtterGang</button>
        <button className="serverButton" type="button">FairyTale</button>
        <button className="serverButton" type="button">FMAB</button>
        <button className="serverButton" type="button">Death Note</button>
        <button className="serverButton" type="button">One Piece</button>
        <button className="serverButton" type="button">Bleach</button>
        <button className="serverButton" type="button">Deadman Wonderland</button>
        <button className="serverButton" type="button">Naruto</button>
      </div>
    </div>
  );
}

export default Servers;
