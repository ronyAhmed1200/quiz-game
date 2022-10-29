import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { scoreActions } from "./../store/scoreSlice";

function Scorepage() {
  const score = useSelector((state) => state.score.currentScore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const playAgain = () => {
    dispatch(scoreActions.restart());
    dispatch(scoreActions.setShowScore());
    navigate("/");
  };

  let text = "";
  let imgUrl = "";
  function setText() {
    if (score > 6) {
      text = "Well done! You have played good this time..";
      imgUrl =
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    } else if (score > 5 && score < 7) {
      text = "You have tried hard.";
      imgUrl =
        "https://images.unsplash.com/photo-1569958907588-5c37110c1bae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlbGlldmUlMjBpbiUyMHlvdXJzZWxmfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    } else {
      text = "Don't worry! Next time you can do better...";
      imgUrl =
        // "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
        "https://images.unsplash.com/photo-1549633030-89d0743bad01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
    }
  }
  setText();

  // if (score > 6) {
  //   setText("Well done. You have played good this time..");
  // } else if (score > 5 && score < 7) {
  //   setText("You have tried hard.");
  // } else {
  //   setText("Don't worry! Next time you can do better...");
  // }

  return (
    <div className="homepage">
      <div className="homepage-bg"></div>
      <div className="homepage-content">
        <h1 className="text-6xl font-bold text-blue-200 uppercase mt-4 mb-2 text-center">
          Game Over
        </h1>
        <p className="text-4xl font-bold mt-8 text-white">
          Your Score: {score}{" "}
        </p>
        <div className="text-center">
          <img src={imgUrl} alt="" className="my-8 w-11/12 md:w-8/12 h-auto" />
          <p className="text-2xl my-8">{text}</p>
        </div>
        <button
          className="btn-primary bg-blue-600 mt-2 mb-4 px-8 py-2 hover:bg-blue-500 uppercase"
          onClick={playAgain}
        >
          play again
        </button>
      </div>
    </div>
  );
}

export default Scorepage;
