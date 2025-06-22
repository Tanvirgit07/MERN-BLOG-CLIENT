import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user-info",
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    steUser: (state,action) => {
        state.user = action.payload
        state.isLoggedIn = true
    },
    removeUser: (state) => {
        state.user = {}
        state.isLoggedIn = false
    }
  },
});

export const {steUser,removeUser} = userSlice.actions
export default userSlice.reducer
