import React, { useState } from "react";
import { useSelector } from "react-redux";
import Quizlist from "./Quizlist";
import "./../styles/Homepage.scss";

function Homepage() {
  const isShowScore = useSelector((state) => state.score.showScore);
  const score = useSelector((state) => state.score.currentScore); // to grab the state of score

  return (
    <div>
      <div className="homepage">
        <div className="homepage-bg"></div>
        <div className="homepage-content">
          <h1 className="text-6xl text-red-200 font-bold uppercase text-center mt-4">
            quiz game
          </h1>
          <p className="mt-4 mb-8 text-white-400 text-xl">
            play the quiz, track your knowledge
          </p>
          {isShowScore && (
            <div className="bg-blue-300 text-black px-4 py-2 mb-2 text-center">
              <h4>
                Score: <span className="text-red">{score}</span>
              </h4>
            </div>
          )}
          <div className="">
            {!isShowScore && (
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                  alt=""
                  className="mb-8 w-9/12 md:w-5/12 h-auto"
                />
              </div>
            )}
            <Quizlist score={score} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
