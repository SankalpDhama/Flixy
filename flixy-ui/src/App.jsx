import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Flixy from "./pages/Flixy";
import Login from "./pages/Login";
import Player from "./pages/Player";
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/" element={<Flixy />} />
      </Routes>
    </BrowserRouter>
  );
}
