import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./quizlist.scss";
import Quiz from "./Quiz";
import { scoreActions } from "./../store/scoreSlice";
import { quesDataArr } from "../data";
// font awesome icon
import { FaBeer } from "react-icons/fa";

const Quizlist = () => {
  // remember useState is a function..
  const [questions, setQuestions] = useState([]);
  const [questionDisplayed, setQuestionDisplayed] = useState(false);
  const dispatch = useDispatch();
  // const apiUrl = "https://opentdb.com/api.php?amount=10&category=26";

  const fetchData = () => {
    setQuestions(quesDataArr);
    setQuestionDisplayed(!questionDisplayed);
    dispatch(scoreActions.setShowScore());
  };

  // const fetchData = async () => {
  //   const response = await axios.get(apiUrl);
  //   // const responseResult = await response.json();
  //   // const responseResult = JSON.stringify(response.data.results);
  //   const responseResult = response.data.results;
  //   // const aresponseResult = Array.from(responseResult);
  //   console.log(responseResult);
  //   setQuestions(responseResult);
  //   setQuestionDisplayed(!questionDisplayed);
  //   dispatch(scoreActions.restart());
  // };

  return (
    <div>
      <div className="quizlist bg-fixed">
        <Quiz questions={questions} quesDisplayed={questionDisplayed} />

        <div className="quiz-start">
          {!questionDisplayed && (
            <button
              className="btn-primary text-3xl px-8 py-2 outline-none border-none"
              type="button"
              onClick={fetchData}
            >
              Start the Quiz <FaBeer />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quizlist;

// passing questions with props to the component question */}
// <div className="questions">
//   {questions.map((question, id) => {
//     return <div key={question.id}>{question}</div>;
//     // note that we can't show object in react. if we try to render object in react, we will get the error: "Uncaught Error: Objects are not valid as a React child"
//     // return <div key={question.id}>{question.question}</div>;
//   })}
// </div>
