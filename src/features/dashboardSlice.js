import { createSlice } from "@reduxjs/toolkit";

const localData = JSON.parse(localStorage.getItem("dashboard"));

const initialState = {
  results: localData ? localData : [],
};

const today = new Date().getTime();
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addResult: (state, action) => {
      const { gameName, scores } = action.payload;
      const id = state.results.length + 1;
      state.results.push({ id, gameName, scores, date: today });
      localStorage.setItem("dashboard", JSON.stringify(state.results));
    },
  },
});

export const { addResult } = dashboardSlice.actions;

export default dashboardSlice.reducer;
