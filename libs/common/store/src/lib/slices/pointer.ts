import { createSlice } from '@reduxjs/toolkit';

export interface PointerState {
  x: number;
  y: number;
}

const initialState: PointerState = {
  x: 0,
  y: 0,
};

export const pointerSlice = createSlice({
  name: 'pointer',
  initialState,
  reducers: {
    setPointer: (state, action) => {
      state.x = action.payload.x;
      state.y = action.payload.y;
    },
  },
});

export const { setPointer } = pointerSlice.actions;

export default pointerSlice.reducer;
