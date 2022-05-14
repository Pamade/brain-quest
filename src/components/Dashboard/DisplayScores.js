/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";

function DisplayScores({ gameName }) {
  const data = useSelector((state) => state.dashboard.results);
  if (data.length === 0)
    return (
      <div className="dashboard__scores">
        <p className="dashboard__scores-p">play the game to see scores</p>
      </div>
    );

  const recent = data
    .filter((type) => type.gameName === gameName)
    .reverse()
    .splice(0, 10);

  const bests = data
    .filter((type) => type.gameName === gameName)
    .sort((a, b) => {
      return b.scores - a.scores;
    })
    .splice(0, 3);

  return (
    <div className="dashboard__scores">
      {recent.length === 0 ? (
        <p className="dashboard__scores-p">play the game to see scores</p>
      ) : (
        <>
          <p className="dashboard__time">
            Last Played:{" "}
            {new Date(recent[0].date).toLocaleString([], {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p className="dashboard__scores-p">
            Best scores:
            {bests.map((score, i) => (
              <span key={i}> {score.scores} </span>
            ))}
          </p>
          <p className="dashboard__scores-p">
            Recent scores:
            {recent.map((score) => (
              <span key={score.id}> {score.scores} </span>
            ))}
          </p>
        </>
      )}
    </div>
  );
}

export default DisplayScores;
