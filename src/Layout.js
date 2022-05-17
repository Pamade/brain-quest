import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RememberNumber from "./components/RememberNumber/RememberNumber";
import WhereItWas from "./components/WhereItWas/WhereItWas";
import Dashboard from "./components/Dashboard/Dashboard";
import Error from "./components/Error/Error";
import WordsMemory from "./components/WordsMemory/WordsMemory";
import CircleNinja from "./components/CircleNinja/CircleNinja";

function Layout() {
  return (
    <main className="content">
      <Header />
      <div className="wrapper">
        <section className="game-wrapper">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/rememberNumber" element={<RememberNumber />} />
            <Route path="/whereItWas" element={<WhereItWas />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wordsMemory" element={<WordsMemory />} />
            <Route path="/circleNinja" element={<CircleNinja />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default Layout;
