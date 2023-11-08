import { createSlice } from '@reduxjs/toolkit';

export interface ToolState {
  type: 'pen' | 'brush' | 'blur' | 'spray' | 'eraser';
  color: string;
  size: number;
  softness: number;
}

const initialState: ToolState = {
  type: 'pen',
  color: '#000000',
  size: 10,
  softness: 0,
};

export const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    setToolType: (state, action) => {
      state.type = action.payload;
    },
    setToolColor: (state, action) => {
      state.color = action.payload;
    },
    setToolSize: (state, action) => {
      state.size = action.payload;
    },
    setToolSoftness: (state, action) => {
      state.softness = action.payload;
    },
  },
});

export const { setToolType, setToolColor, setToolSize, setToolSoftness } =
  toolSlice.actions;

export default toolSlice.reducer;
