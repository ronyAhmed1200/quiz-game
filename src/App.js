import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Scorepage from "./components/Scorepage";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/quiz-game" element={<Homepage />} />
        <Route path="/score" element={<Scorepage />} />
      </Routes>
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }
