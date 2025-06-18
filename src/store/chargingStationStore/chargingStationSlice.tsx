import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showEditVariable: false,
}

const chargingStationSlice = createSlice({
  name: 'chargingStation',
  initialState,
  reducers: {
    setShowEditVariable: (state, action) => {
        state.showEditVariable = action.payload;
    }
  },
});

export const { setShowEditVariable } = chargingStationSlice.actions;

export default chargingStationSlice.reducer;