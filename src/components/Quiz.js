import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Answer from "./Answer";
import Notification from "./Notification";
import { FaRocket } from "react-icons/fa";

function Quiz({ questions, quesDisplayed }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const notification = useSelector((state) => state.ui.notification);
  const quesArr = [];
  const navigate = useNavigate();
  function modalOpenFunc() {
    setModalOpen(true);
    setColorChange(true);
  }

  const getScore = () => {
    navigate("/score");
  };

  return (
    <form className="questions">
      {notification && modalOpen && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {questions.map((each_qobj, index) => {
        const { question, rightAns, answers } = each_qobj;

        // console.log(quesArr, quesArr.length);
        // referencing each answer btn:

        // shuffling the array so array got shuffled
        const shuffledArr = quesArr.sort((a, b) => 0.5 - Math.random());
        // console.log(shuffledArr);
        return (
          <div
            className="question-container"
            key={index}
            style={{ backgroundColor: colorChange ? "#333" : "transparent" }}
          >
            {/* question */}
            <div className="list">
              <h4 className="question-title text-yellow-400 mb-2">
                <FaRocket className="icon" />
                {question}
              </h4>
              <Answer
                correct_answer={rightAns}
                answers={answers}
                quesArr={shuffledArr}
                modalOpenFunc={modalOpenFunc}
              />
            </div>
          </div>
        );
      })}
      {quesDisplayed && (
        <button
          className="btn bg-blue-500 hover:bg-blue-400 text-yellow-50 text-lg font-bold px-6 py-2 rounded-md m-auto my-3 text-center w-full"
          onClick={getScore}
        >
          Check your Score{" "}
        </button>
      )}
    </form>
  );
}

export default Quiz;
