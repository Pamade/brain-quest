import React, { useEffect, useState } from "react";
import { Line } from "rc-progress";
import { useDispatch } from "react-redux";
import { addResult } from "../../features/dashboardSlice";

let interval = undefined;

function RememberNumber() {
  const dispatch = useDispatch();
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(100);
  const [inputValue, setInputValue] = useState("");
  const [numberToGuess, setNumberToGuess] = useState(undefined);
  const [guessing, setGuessing] = useState(false);
  const [isGuessed, setIsGuessed] = useState(undefined);
  const [multiplier, setMultiplier] = useState(1);
  const [stage, setStage] = useState(0);

  const randomNumber = Math.floor(
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
      dispatch(addResult({ gameName: "rememberNumber", scores: stage }));
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
    setNumberToGuess(randomNumber);
  };

  const progressBar = (
    <div>
      <p className="remember-number__number">{numberToGuess}</p>
      <Line percent={progress} strokeWidth="1" strokeColor="red" />
    </div>
  );

  const displayInitialButton = (
    <button className="btn" onClick={handleStart}>
      Start the game
    </button>
  );

  const displayGuessingInput = (
    <div>
      <input
        type="text"
        className="remember-number__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn" onClick={confirmGuess}>
        Confirm guess
      </button>
    </div>
  );

  return (
    <div className="remember-number">
      <div className="game-description">
        <h3 className="remember-number__heading game-heading">
          Remember Number
        </h3>
        <p className="remember-number__stage stage">
          {`Finished stages ${stage}`}
        </p>
      </div>
      {running ? progressBar : ""}
      {numberToGuess === inputValue && !guessing ? (
        <>
          <h3 className="is-right">Correct!</h3>
          <button className="btn" onClick={handleStart}>
            Start stage {stage + 1}
          </button>
        </>
      ) : isGuessed === false ? (
        <>
          <h3 className="is-right">Incorrect</h3>
          <button className="btn" onClick={handleStart}>
            You can start again
          </button>
        </>
      ) : (
        ""
      )}
      {guessing ? displayGuessingInput : ""}
      {numberToGuess === undefined ? displayInitialButton : ""}
    </div>
  );
}

export default RememberNumber;
