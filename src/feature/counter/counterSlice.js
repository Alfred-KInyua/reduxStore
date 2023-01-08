import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  counts: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counts += 1;
    },
    decrement: (state) => {
      state.counts -= 1;
    },
    reset: (state) => {
      state.counts = 0;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, reset } = counterSlice.actions;
