import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    setCount: (state) => (state += 1),
  },
});
export const { setCount } = countSlice.actions;
export default countSlice.reducer;
