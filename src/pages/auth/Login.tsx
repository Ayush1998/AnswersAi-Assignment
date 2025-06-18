// src/pages/Login.tsx
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';
import { auth } from '../../firebase';
import type { RootState } from '../../store/Store';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, toggleLoading } from '../../store/authStore/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loading } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    if (!email || !password || loading) {
      return;
    }
    e.preventDefault();
    setError('');
    try {
      dispatch(toggleLoading(true));
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredentials.user;
      dispatch(setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
      }));
      navigate('/home');
    } catch (err) {
        console.error(err);
        setError('Your Id or Password is incorrect. Please try again.');
    }finally {
      dispatch(toggleLoading(false));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Login</h2>

        {error && <p className={styles.error}>{error}</p>}

        <form className={styles.form} onSubmit={handleLogin}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.button} type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <p className={styles.linkText}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
