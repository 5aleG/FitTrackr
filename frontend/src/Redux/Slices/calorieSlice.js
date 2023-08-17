import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calories: [],
};

const caloriesSlice = createSlice({
  name: 'calories',
  initialState,
  reducers: {
    updateCalories: (state, action) => {
      state.calories = action.payload;
    },
  },
});

export const { updateCalories } = caloriesSlice.actions;
export default caloriesSlice.reducer;
