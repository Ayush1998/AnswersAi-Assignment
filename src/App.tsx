import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Suspense } from 'react';
import PrivateRoute from './pages/auth/PrivateRoute';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/home/Home';

function App() {
  return (
    <div className={styles.app}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                } />
                <Route path="*" 
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />
              </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
