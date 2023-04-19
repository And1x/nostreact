import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Notes from "./pages/Notes";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
