import { createSlice } from '@reduxjs/toolkit';

export interface TopbarProps {
    label: string;
    path: string;
}

interface TopbarState {
  value: TopbarProps[];
}

const initialState: TopbarState = {
    value: []
}

const topbarSlice = createSlice({
  name: 'topbar',
  initialState,
  reducers: {
    setTopbar: (state, action) => {
        state.value = action.payload;
    }
  },
});

export const { setTopbar } = topbarSlice.actions;

export default topbarSlice.reducer;