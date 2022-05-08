import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RememberNumber from "./components/Games/RememberNumber";

function Layout() {
  return (
    <main className="content">
      <Header />
      <div className="wrapper">
        <section className="game-wrapper">
          <div className="game-wrapper__box"></div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/rememberNumber" element={<RememberNumber />} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default Layout;
