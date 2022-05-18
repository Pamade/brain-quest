import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import circleNinja from "../../../src/images/circleNinja.JPG";
import rememberNumber from "../../../src/images/rememberNumber.JPG";
import whereItWas from "../../../src/images/whereItWas.JPG";
import wordsMemory from "../../../src/images/wordsMemory.JPG";

function Home() {
  return (
    <div className="home">
      <h1 className="game-heading">Brain Quest</h1>
      <div className="home__wrapper">
        <div className="home__box">
          <div className="home__description-box">
            <h2 className="home__heading">Remember Number</h2>
            <p className="home__description">Remember the biggest number</p>
          </div>
          <img
            className="home__image"
            src={rememberNumber}
            alt="remember number"
          />
          <div className="home__button-wrapper">
            <Link to="./rememberNumber">
              <Button />
            </Link>
          </div>
        </div>
        <div className="home__box">
          <div className="home__description-box">
            <h2>Where it was</h2>
            <p className="home__description">
              Try to guess location of elements
            </p>
          </div>
          <img className="home__image" src={whereItWas} alt="where it was" />
          <div className="home__button-wrapper">
            <Link to="./whereItWas">
              <Button />
            </Link>
          </div>
        </div>
        <div className="home__box">
          <div className="home__description-box">
            <h2>Words Memory</h2>
            <p className="home__description">
              Select if the word was shown before
            </p>
          </div>
          <img className="home__image" src={wordsMemory} alt="words memory" />
          <div className="home__button-wrapper">
            <Link to="./wordsMemory">
              <Button />
            </Link>
          </div>
        </div>
        <div className="home__box">
          <div className="home__description-box">
            <h2>Circle ninja</h2>
            <p className="home__description">Hit the circles</p>
          </div>
          <img className="home__image" src={circleNinja} alt="circle ninja" />
          <div className="home__button-wrapper">
            <Link to="./circleNinja">
              <Button />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
