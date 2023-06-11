import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginStatus",
  initialState: {
    status: false,
  },
  reducers: {
    toogleLogin: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { toogleLogin } = loginSlice.actions; //access to all different files to
export default loginSlice.reducer; //sent to store to create a slice
