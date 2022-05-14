import React from "react";
import { Link } from "react-router-dom";
import DisplayScores from "./DisplayScores";
function Dashboard() {
  return (
    <div className="dashboard">
      <h3 className="game-heading">Dashboard</h3>
      <div className="dashboard__wrapper">
        <div className="dashboard__box dashboard__box-logo">
          <Link to="../whereItWas">
            <div className="dashboard__logo">?</div>
          </Link>
          <div className="dashboard__description-box">
            <p className="dashboard__name">Where it was</p>
            <p className="dashboard__description">
              Remember location of placed numbers
            </p>
          </div>
          <DisplayScores gameName={"whereItWas"} />
        </div>
        <div className="dashboard__box dashboard__box-logo">
          <Link to="../rememberNumber">
            <div className="dashboard__logo">123</div>
          </Link>
          <div className="dashboard__description-box">
            <p className="dashboard__name">Remember Number</p>
            <p className="dashboard__description">
              Remember where were displayed recently shown numbers
            </p>
          </div>
          <DisplayScores gameName={"rememberNumber"} />
        </div>
        <div className="dashboard__box dashboard__box-logo">
          <Link to="../wordsMemory">
            <div className="dashboard__logo">W</div>
          </Link>
          <div className="dashboard__description-box">
            <p className="dashboard__name">Word Memory</p>
            <p className="dashboard__description">
              Select if the word was shown before
            </p>
          </div>
          <DisplayScores gameName={"wordsMemory"} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
