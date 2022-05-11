import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RememberNumber from "./components/RememberNumber/RememberNumber";
import WhereItWas from "./components/WhereItWas/WhereItWas";
import Dashboard from "./components/Dashboard/Dashboard";

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
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default Layout;
