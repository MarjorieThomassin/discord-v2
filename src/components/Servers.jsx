import React from 'react';
import '../CSS/Servers.css';

function Servers() {
  return (
    <>
      <div className="TitleServer">
        <h1>Your Severs</h1>
      </div>
      <div className="gridServer">
        <button className="serverButton" type="button">Unicorns</button>
        <button className="serverButton" type="button">Gaming</button>
        <button className="serverButton" type="button">Music</button>
        <button className="serverButton" type="button">CrowCrew</button>
        <button className="serverButton" type="button">OtterGang</button>
        <button className="serverButton" type="button">FairyTale</button>
      </div>
    </>
  );
}

export default Servers;
