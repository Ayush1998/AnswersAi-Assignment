import { useDispatch } from 'react-redux';
import { setTopbar } from '../../store/topbarStore/TopbarSlice';
import { lazy, useEffect } from 'react';
import { TOPBAR_ITEMS } from './constants';
import { Route, Routes } from 'react-router-dom';

const ChargingStations = lazy(() => import('./chargingStations/ChargingStations'));

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTopbar(TOPBAR_ITEMS));
    }, []);

    return (
        <Routes>
            <Route path="/" element={<ChargingStations />} />
            <Route path="*" element={<ChargingStations />} />
        </Routes>
    )
}

export default Home
