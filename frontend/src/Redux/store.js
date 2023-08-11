import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slices/auth';
import caloriesReducer from './Slices/calorieSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    calories: caloriesReducer,
  },
});