import React, { useEffect, useState } from "react";
import { Line } from "rc-progress";
import { useDispatch } from "react-redux";
import { addResult } from "../../features/dashboardSlice";

function CircleNinja() {
  const [stage, setStage] = useState(1);
  const [id, setId] = useState(0);
  const [circles, setCircles] = useState([]);
  const [percent, setPercent] = useState(100);
  const [time, setTime] = useState(0);
  const [points, setPoints] = useState(0);
  const [touch, setTouch] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const dispatch = useDispatch();
  let interval = null;
  const animationTime = time.toFixed(2) / 1000;

  useEffect(() => {
    if (gameStart === true && percent !== 0) {
      interval = setInterval(() => {
        hideCircle(id);
        addCircle();
      }, time);
      return () => {
        clearInterval(interval);
      };
    } else if (percent === 0) {
      dispatch(addResult({ gameName: "circleNinja", scores: points }));
    }
  }, [circles, gameStart]);

  const removeCircle = (index) => {
    let circlesCopy = [];
    circlesCopy = circles.map((circle) => {
      if (circle.number === index) {
        return { ...circle, isHidden: true };
      }
      return circle;
    });

    setCircles(circlesCopy);
  };

  const addCircle = () => {
    const isGoodOrBad = Math.floor(Math.random() * 5) + 1;
    setId((id) => id + 1);
    setCircles((circles) => [
      ...circles,
      {
        number: id,
        position: Math.floor(Math.random() * 90) + 1 + "%",
        isBad: isGoodOrBad !== 1 ? false : true,
        isHidden: false,
      },
    ]);
    setTouch(false);
  };

  const hideCircle = (index) => {
    if (touch === false && !circles[circles.length - 1].isBad) {
      setPercent((percent) => percent - 10);
    }
    removeCircle(index);
  };

  const handleClick = (index) => {
    removeCircle(index);
    addCircle();
    if (circles[circles.length - 1].isBad) {
      setPercent((percent) => percent - 10);
    } else {
      setPoints((point) => point + 1);
    }

    if (points % 4 === 3) {
      setTime((time) => time / 1.1);
      setStage((stage) => stage + 1);
      if (percent !== 100) {
        setPercent((percent) => percent + 10);
      }
    }
  };

  const handleStartGame = () => {
    setGameStart(true);
    setPercent(100);
    setPoints(0);
    setCircles([]);
    setId(0);
    setTouch(null);
    setStage(1);
    setTime(1500);
    interval = null;
  };

  const items =
    circles &&
    circles?.map(
      (circle, index) =>
        !circle.isHidden && (
          <div
            className={
              circle.isBad
                ? "circle-ninja__circle circle-ninja__circle-bad"
                : "circle-ninja__circle"
            }
            key={index}
            style={{
              left: circle.position,
              animationDuration: animationTime + "s",
            }}
            onClick={() => handleClick(index)}
          >
            {circle.number + 1}
          </div>
        )
    );

  const gameBox = (
    <>
      <p>Animation Time: {animationTime.toFixed(2)} s</p>
      <div className="circle-ninja__game-box">{items}</div>
      <Line
        percent={percent}
        strokeWidth="1"
        strokeLinecap="butt"
        style={{ margin: "1.5rem 0" }}
        strokeColor="lightgreen"
      />
    </>
  );

  return (
    <section className="circle-ninja">
      <div className="circle-ninja__wrapper">
        <h3 className="game-heading">Circle Ninja</h3>
        <p className="stage">
          Stage {stage} <span>Points {points}</span>
        </p>
        <p>
          Each stage you gain 10 health, clicking bad circles causes a loss of
          hp
        </p>
        {!touch && percent === 0 && gameStart && (
          <h2 className="is-right">You lost</h2>
        )}
        {!gameStart || percent === 0 ? (
          <div>
            <button className="btn" onClick={handleStartGame}>
              Start the game
            </button>
          </div>
        ) : (
          gameBox
        )}
      </div>
    </section>
  );
}

export default CircleNinja;
