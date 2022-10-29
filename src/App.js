import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Scorepage from "./components/Scorepage";
import "./App.css";

export default function App() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/score" element={<Scorepage />} />
      </Routes>
    </main>
  );
}

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }
