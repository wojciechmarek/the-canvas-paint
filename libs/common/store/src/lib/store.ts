import { configureStore } from '@reduxjs/toolkit'
import toolReducer from './slices/tool';
import pointerReducer from './slices/pointer';

export const store = configureStore({
  reducer: {
    tool: toolReducer,
    pointer: pointerReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch