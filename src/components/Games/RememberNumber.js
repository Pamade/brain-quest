import React, { useEffect, useState } from "react";
import { Line } from "rc-progress";

let interval = undefined;

function RememberNumber() {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(100);
  const [inputValue, setInputValue] = useState("");
  const [numberToGuess, setNumberToGuess] = useState(0);
  const [multipliter, setMultiplier] = useState(10);
  const [guessing, setGuessing] = useState(false);
  const [isGuessed, setIsGuessed] = useState(undefined);
  let [level, setLevel] = useState(1);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev - 1);
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
      setMultiplier(multipliter * 10);
      setLevel(2);
      console.log(level);
    } else {
      setIsGuessed(false);
    }
  };

  const handleStart = () => {
    const diff = 100 * multipliter - 10 * multipliter;
    const getRandom = Math.floor(Math.random() * diff);
    setNumberToGuess(getRandom);
    setIsGuessed(undefined);
    setInputValue("");
    setGuessing(false);
    setRunning(true);
    setProgress(100);
  };

  const handleStartAgain = () => {
    setMultiplier(10);
    handleStart();
  };

  return (
    <div className="remember-number">
      <h2 className="remember-number__heading game-heading">Remember Number</h2>
      {running ? (
        <>
          {numberToGuess}
          <Line percent={progress} strokeWidth="1" strokeColor="red" />
        </>
      ) : (
        ""
      )}
      {numberToGuess === inputValue && !guessing ? (
        <>
          <h2>Correct!</h2>
          <button onClick={handleStart}>Go next</button>
        </>
      ) : isGuessed === false ? (
        <>
          <h2>Incorrect</h2>
          <button onClick={handleStartAgain}>You can start again</button>
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
            onChange={(e) => setInputValue(parseInt(e.target.value))}
          />
          <button onClick={confirmGuess}>Confirm guess</button>
        </>
      ) : (
        ""
      )}
      {numberToGuess === 0 ? (
        <button onClick={handleStart}>Start the game</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default RememberNumber;
