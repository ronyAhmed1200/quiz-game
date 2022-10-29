import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: {
    currentScore: 0,
    showScore: false,
  },
  reducers: {
    increment(state) {
      state.currentScore++;
    },
    restart(state) {
      state.currentScore = 0;
    },
    setShowScore(state) {
      state.showScore = !state.showScore;
    },
  },
});

export const scoreActions = scoreSlice.actions;
export default scoreSlice;
