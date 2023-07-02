import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postsSlice from "./reducers/posts";

export const store = configureStore({
  reducer: { posts: postsSlice },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
