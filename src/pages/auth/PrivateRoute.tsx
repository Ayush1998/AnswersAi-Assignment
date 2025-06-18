import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import type { RootState } from '../../store/Store';
import React, { lazy } from 'react';
import styles from '../../App.module.css';

const Navbar = lazy(() => import('../../components/navbar/Navbar'));
const Topbar = lazy(() => import('../..//components/topbar/Topbar'));

interface Props {
  children: React.ReactElement;
}

const PrivateRoute = ({ children }: Props) => {
  const { user } = useSelector((state: RootState) => state.auth);

  return user ? (
    <div className={styles.app}>
        <Navbar />
        <div className={styles.content}>
        <Topbar />
        <div className={styles.mainContent}>
            {children}
        </div>
    </div>
  </div>
  ) : <Navigate to="/login" />;
};

export default PrivateRoute;
