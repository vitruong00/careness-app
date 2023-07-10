import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserProps } from "../../interfaces/User.interfaces";

interface initialStateProps {
  userInfo: UserProps;
}

const initialState: initialStateProps = {
  userInfo: { firstName: "", lastName: "", email: "", userId: "" },
};

export const usersSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = {
        firstName: action.payload.givenName,
        lastName: action.payload.familyName,
        email: action.payload.email,
        userId: action.payload.googleId,
      };
    },
  },
});

export const { setUserInfo } = usersSlice.actions;

export default usersSlice.reducer;
