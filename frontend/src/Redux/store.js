import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slices/auth';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});