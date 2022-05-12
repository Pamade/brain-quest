import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../components/features/dashboardSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});
