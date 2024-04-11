import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Flixy from "./pages/Flixy";
import Login from "./pages/Login";
export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Flixy />} />
      </Routes>
    </BrowserRouter>
  );
}
