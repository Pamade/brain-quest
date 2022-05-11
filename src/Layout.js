import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RememberNumber from "./components/Games/RememberNumber/RememberNumber";
import WhereItWas from "./components/Games/WhereItWas/WhereItWas";

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
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default Layout;
