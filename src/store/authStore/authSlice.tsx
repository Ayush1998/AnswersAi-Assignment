import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {
  uid: string;
  email: string | null;
}

interface AuthState {
  user: User | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.loading = false;
    },
    clearUser(state) {
      state.user = null;
      state.loading = false;
    },
  },
});

export const { setUser, clearUser, toggleLoading } = authSlice.actions;
export default authSlice.reducer;