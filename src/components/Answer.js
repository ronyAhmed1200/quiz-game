import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { scoreActions } from "./../store/scoreSlice";
import { uiActions } from "./../store/uiSlice";

function Answer({ correct_answer, answers, quesArr, modalOpenFunc }) {
  const [toggleColor, setToggleColor] = useState(false);
  const [pointer, setPointer] = useState(true);
  const dispatch = useDispatch();

  const ansClicked = (event) => {
    // in arrow function `this` has no element.
    const clickedElement = event.target;
    console.log("event target: result and ", clickedElement);
    // console.log(result);
    // now the event.target is showing me the element. bcz every element clicked, gets an event.. {read more in Readme file}
    // clickedElement.style.backgroundColor = toggleColor ? "transparent" : "#444";
    scoreFunction(clickedElement);
    setToggleColor(!toggleColor);
    setPointer(false);
    // setISShuffle(false);
  };

  //++ function for scoring
  const scoreFunction = (clickedElement) => {
    // console.log(clickedElement);
    clickedElement.style.fontWeight = "bold";
    if (clickedElement.textContent === correct_answer) {
      clickedElement.style.backgroundColor = "green";
      dispatch(scoreActions.increment());
      console.log("correct answer: " + correct_answer);
    } else {
      clickedElement.style.backgroundColor = "red";
      dispatch(
        uiActions.setShowNotification({
          type: "info",
          message: `The correct answer is - ${correct_answer}`,
          open: true,
        })
      );
      modalOpenFunc();
      console.log("wrong answer: " + correct_answer);
    }
  };

  return (
    //++ newer way of getting array with shuffling.
    <div className="answer">
      <ul>
        {answers.map((eachAnswer, index) => {
          return (
            <li
              key={index}
              style={{ pointerEvents: !pointer ? "none" : "auto" }}
              // style={{ backgroundColor: toggleColor ? "blue" : "#555" }}
              className="px-4 py-1 rounded-lg hover:bg-purple-500 answerBtn"
              onClick={ansClicked}
            >
              {eachAnswer}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Answer;
