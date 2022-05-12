import React from "react";

function Home() {
  return (
    <div className="home">
      <h1 className="game-heading">Brain Quest</h1>
      <div className="home__wrapper">
        <div className="home__box">
          <h2>Remember Number</h2>
          <p className="home__description">Remember the biggest number</p>
          <p className="home__preview-p">Preview</p>
          <video autoPlay muted loop className="home__video">
            <source
              src="https://cdn.kapwing.com/final_627d12741e27fd0066682598_349636.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="home__box">
          <h2>Where it was</h2>
          <p className="home__description">Try to guess location of elements</p>
          <p className="home__preview-p">Preview</p>
          <video autoPlay muted loop className="home__video">
            <source
              src="https://cdn.kapwing.com/2022_05_12_16_00_44-17TLQe2N5-.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Home;
