import { configureStore } from "@reduxjs/toolkit";
import workSlice from "../workSlice";
import loginSlice from "./loginSlice";
const store = configureStore({
  reducer: {
    toogleWork: workSlice,
    loginStatus: loginSlice, //now loginStatus is used instead of loginSlcie to use loginSlice state
  },
});

export default store;
