import React, { useEffect, useState } from "react";
import { Line } from "rc-progress";

let interval = undefined;

function RememberNumber() {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(100);
  const [inputValue, setInputValue] = useState("");
  const [numberToGuess, setNumberToGuess] = useState(undefined);
  const [guessing, setGuessing] = useState(false);
  const [isGuessed, setIsGuessed] = useState(undefined);
  const [multiplier, setMultiplier] = useState(1);
  const [stage, setStage] = useState(0);

  const num = Math.floor(
    Math.random() * (multiplier * 99 - multiplier * 10 + 1) + 10 * multiplier
  ).toString();

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev - 0.5);
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress <= 0) {
      setRunning(false);
      setGuessing(true);
      clearInterval(interval);
    }
  }, [progress]);

  const confirmGuess = () => {
    setGuessing(false);
    if (numberToGuess === inputValue) {
      setIsGuessed(true);
      setMultiplier((prev) => prev * 10);
      setStage((prev) => (prev += 1));
    } else {
      setMultiplier(1);
      setIsGuessed(false);
    }
  };

  const handleStart = () => {
    if (!isGuessed) setStage(0);
    setIsGuessed(undefined);
    setInputValue("");
    setGuessing(false);
    setRunning(true);
    setProgress(100);
    setNumberToGuess(num);
  };

  return (
    <div className="remember-number">
      <h2 className="remember-number__heading game-heading">Remember Number</h2>
      <p
        className="remember-number__stage"
        style={{ margin: "0.7rem 0 3rem 0" }}
      >
        {isGuessed || isGuessed === false ? "Finished stages " + stage : ""}
      </p>
      {running ? (
        <>
          <p style={{ fontSize: "50px" }}>{numberToGuess}</p>
          <Line percent={progress} strokeWidth="1" strokeColor="red" />
        </>
      ) : (
        ""
      )}
      {numberToGuess === inputValue && !guessing ? (
        <>
          <h2>Correct!</h2>
          <button className="btn" onClick={handleStart}>
            Start stage {stage + 1}
          </button>
        </>
      ) : isGuessed === false ? (
        <>
          <h2>Incorrect</h2>
          <button className="btn" onClick={handleStart}>
            You can start again
          </button>
        </>
      ) : (
        ""
      )}
      {guessing ? (
        <>
          <input
            type="text"
            className="remember-number__input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn" onClick={confirmGuess}>
            Confirm guess
          </button>
        </>
      ) : (
        ""
      )}
      {numberToGuess === undefined ? (
        <button className="btn" onClick={handleStart}>
          Start the game
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default RememberNumber;
