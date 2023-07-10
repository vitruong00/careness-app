import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postsSlice from "./reducers/posts";
import usersSlice from "./reducers/users";

export const store = configureStore({
  reducer: { posts: postsSlice, users: usersSlice },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
