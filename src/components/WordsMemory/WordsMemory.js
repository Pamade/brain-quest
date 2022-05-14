/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addResult } from "../../features/dashboardSlice";

function WordsMemory() {
  const dispatch = useDispatch();
  const [allWords, setAllWords] = useState([]);
  const [wordsToDisplay, setWordsToDisplay] = useState([]);
  const [wordsDisplayed, setWordsDisplayed] = useState([]);
  const [singleWord, setSingleWord] = useState("");
  const [stage, setStage] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameReset, setGameReset] = useState(false);

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=200").then(
      (response) =>
        response.json().then((data) => {
          setAllWords(data);
          setWordsToDisplay(data.slice(0, 3));
        })
    );
  }, [gameReset]);

  const handleStart = () => {
    if (lives === 0) {
      setSingleWord("");
      setLives(3);
      setStage(0);
      setWordsDisplayed([]);
    }
    const allWordsCopy = [...allWords];
    const randomNewWord = allWords[Math.floor(Math.random() * allWords.length)];
    const newArr = allWordsCopy.filter((word) => word !== randomNewWord);
    const randomExistingWord =
      wordsToDisplay[Math.floor(Math.random() * wordsToDisplay.length)];
    const formula = Math.floor(Math.random() * 2);

    if (formula === 1) {
      setSingleWord(randomExistingWord);
    } else {
      setWordsToDisplay((prev) => [...prev, randomNewWord]);
      setSingleWord(randomNewWord);
    }
    setAllWords(newArr);
  };

  const handleGuess = (isNew) => {
    let includes = null;
    if (wordsDisplayed.includes(singleWord)) {
      includes = true;
    } else {
      includes = false;
      setWordsDisplayed((prev) => [...prev, singleWord]);
    }

    if ((isNew && !includes) || (!isNew && includes)) {
      setStage((prev) => (prev += 1));
    } else {
      setLives((prev) => (prev -= 1));
      // if (!wordsDisplayed.includes(singleWord)) {
      //   setWordsDisplayed((prev) => [...prev, singleWord]);
      // }
      if (lives === 1) {
        dispatch(addResult({ gameName: "wordsMemory", scores: stage }));
        setGameReset(true);
      }
    }
    handleStart();
    console.log(wordsDisplayed);
  };

  return (
    <div className="words-memory">
      <div className="words-memory__description">
        <h3 className="game-heading words-memory__heading">Words Memory</h3>
        <p className="stage">Finished stages {stage}</p>

        {lives !== 0 && singleWord !== "" && (
          <>
            <p>Lives: {lives}</p>
            <p className="words-memory__word">{singleWord}</p>
          </>
        )}
        {singleWord === "" ? (
          <button onClick={handleStart} className="btn">
            Start the game
          </button>
        ) : (
          <>
            {lives !== 0 && (
              <>
                <button
                  onClick={() => handleGuess(false)}
                  className="btn words-memory__button"
                >
                  SEEN
                </button>
                <button
                  onClick={() => handleGuess(true)}
                  className="btn words-memory__button"
                >
                  NEW
                </button>
              </>
            )}
          </>
        )}
        {lives === 0 && (
          <>
            <h2>You lost</h2>
            <button onClick={handleStart} className="btn">
              You can start again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default WordsMemory;
