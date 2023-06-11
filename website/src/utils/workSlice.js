import { createSlice } from "@reduxjs/toolkit";

const workSlice = createSlice({
  name: "OptionToogle",
  initialState: {
    buttonClicked: "BUILD",
  },
  reducers: {
    toogleOption: (state, action) => {
      state.buttonClicked = action.payload;
    },
  },
});

export const { toogleOption } = workSlice.actions;
export default workSlice.reducer;
