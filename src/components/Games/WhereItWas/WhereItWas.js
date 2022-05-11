import React, { useEffect, useState } from "react";

const initialValues = [
  { value: 0, isHidden: true },
  { value: 0, isHidden: true },
  { value: 0, isHidden: true },
];

function WhereItWas() {
  const [gameStarted, setGameStarted] = useState(false);
  const [itemsDisplayed, setItemsDisplayed] = useState(false);
  const [itemsToFind, setItemsToFind] = useState(initialValues);
  const [answers, setAnswers] = useState([]);
  const [specificNumber, setSpecificNumber] = useState(undefined);
  const [hideBoard, setHideBoard] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    shuffleArray();
  }, []);

  const shuffleArray = () => {
    const newArr = itemsToFind;
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [itemsToFind[i], itemsToFind[rand]] = [itemsToFind[rand], itemsToFind[i]];
    }
    newArr.map((item) => (item.isHidden = true));
    setItemsToFind(newArr);
  };

  const randomizeNumbers = () => {
    const itemsToFindCopy = [...itemsToFind];
    itemsToFindCopy.map((i) => (i.value = Math.floor(Math.random() * 9) + 1));
    setItemsToFind(itemsToFindCopy);
  };

  const handleStart = () => {
    if (itemsToFind.length === 3) {
      setStage(0);
    }
    randomizeNumbers();
    const index = Math.floor(Math.random() * itemsToFind.length);
    const numberIndex = itemsToFind[index].value;
    const numbersToGuessCount = itemsToFind.filter(
      (item) => item.value === numberIndex
    );

    setGameStarted(true);
    setItemsDisplayed(true);
    setSpecificNumber(undefined);
    setAnswers(numbersToGuessCount);
    setHideBoard(false);
    setTimeout(() => {
      setItemsDisplayed(false);
      setSpecificNumber(numberIndex);
    }, 4000);
    shuffleArray();
  };

  const handleClickSquare = (value, id) => {
    if (specificNumber === value) {
      const arr = [...itemsToFind];
      arr[id].isHidden = false;
      const filterAnswers = answers.filter((item) => item.isHidden === true);
      setAnswers(filterAnswers);
      setItemsToFind(arr);
      if (answers.length === 1) {
        setStage((prev) => (prev += 1));
        setHideBoard(true);
        setItemsToFind([...itemsToFind, { value: 0, isHidden: true }]);
      }
    } else {
      setItemsToFind(initialValues);
      setHideBoard(true);
    }
  };

  const boxGuess = (i, value, color) => {
    return (
      <div
        style={{ backgroundColor: color }}
        className="where-it-was__color where-it-was__item"
        key={i}
      >
        <p>{value}</p>
      </div>
    );
  };

  const initialButton = (
    <button className="btn" onClick={handleStart}>
      Start the game
    </button>
  );

  const textWhereWasThat =
    gameStarted && specificNumber !== undefined ? (
      <p className="where-it-was__item-to-find">Find Number {specificNumber}</p>
    ) : (
      ""
    );

  const showItems = (
    <div className="where-it-was__box">
      {itemsToFind &&
        itemsToFind?.map((item, i) =>
          !itemsDisplayed ? (
            itemsToFind[i].isHidden ? (
              <div
                className="where-it-was__question-mark where-it-was__item"
                onClick={handleClickSquare.bind(this, item.value, i)}
                key={i}
              >
                ?
              </div>
            ) : (
              boxGuess(i, item.value, "lightgreen")
            )
          ) : (
            boxGuess(i, item.value, "purple")
          )
        )}
    </div>
  );

  const displayResult = () => {
    if (answers.length === 0 && gameStarted) {
      return (
        <div>
          <p className="is-right">Good job!</p>
          <button onClick={handleStart} className="btn">
            Go to next level
          </button>
        </div>
      );
    } else if (hideBoard) {
      return (
        <div>
          <p className="is-right">You lost :(</p>
          <button onClick={handleStart} className="btn">
            You can start again
          </button>
        </div>
      );
    }
  };

  return (
    <section className="where-it-was">
      <div className="where-it-was__wrapper">
        <div className="game-description">
          <h2 className="game-heading where-ite-was__heading">Where it was</h2>
          <p className="stage where-it-was__stage">Finished stages {stage}</p>
        </div>
        {textWhereWasThat}
        {displayResult()}
        {!hideBoard && gameStarted && itemsToFind ? showItems : ""}
      </div>
      {stage === 0 && !gameStarted ? initialButton : ""}
    </section>
  );
}

export default WhereItWas;
