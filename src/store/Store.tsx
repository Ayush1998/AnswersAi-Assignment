import { configureStore } from '@reduxjs/toolkit';
import topbarSlice from './topbarStore/TopbarSlice';
import chargingStationSlice from './chargingStationStore/chargingStationSlice';
import authSlice from './authStore/authSlice';

const store = configureStore({
  reducer: {
    topbar: topbarSlice,
    chargingStations: chargingStationSlice,
    auth: authSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;