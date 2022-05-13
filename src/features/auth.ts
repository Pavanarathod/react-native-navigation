import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: null | {};
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state, action: PayloadAction<null | {}>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
