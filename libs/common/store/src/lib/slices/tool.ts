import { createSlice } from '@reduxjs/toolkit'

export interface ToolState {
  selected: 'pen' | 'brush' | 'blur' | 'spray' | 'eraser';
}

const initialState: ToolState = {
  selected: "pen",
}

export const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    setSelectedTool: (state, action) => {
      state.selected = action.payload;
    },
  },
})

export const { setSelectedTool } = toolSlice.actions;

export default toolSlice.reducer;