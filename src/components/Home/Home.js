import React from "react";

function Home() {
  return (
    <div className="home">
      <h1 className="game-heading">Brain Quest</h1>
      <div className="home__wrapper">
        <div className="home__box">
          <h2 className="home__heading">Remember Number</h2>
          <p className="home__description">Remember the biggest number</p>
          <p className="home__preview-p">Preview</p>
          <div
            style={{
              width: "100%",
              height: "0",
              position: "relative",
              paddingBottom: "19.219%",
            }}
            className="home__video"
          >
            <iframe
              src="https://streamable.com/e/5dsn8p?autoplay=1&nocontrols=1"
              frameBorder="0"
              width="100%"
              height="100%"
              allowFullScreen
              allow="autoplay"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </div>
        <div className="home__box">
          <h2>Where it was</h2>
          <p className="home__description">Try to guess location of elements</p>
          <p className="home__preview-p">Preview</p>
          <div
            style={{
              width: "100%",
              height: "0",
              position: "relative",
              paddingBottom: "19.219%",
            }}
            className="home__video"
          >
            <iframe
              src="https://streamable.com/e/6ef8ec?autoplay=1&nocontrols=1"
              frameBorder="0"
              width="100%"
              height="100%"
              allowFullScreen
              allow="autoplay"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
