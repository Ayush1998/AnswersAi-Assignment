// src/pages/Signup.tsx
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/Store';
import { setUser, toggleLoading } from '../../store/authStore/authSlice';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || loading) {
      return;
    }
    setError('');
    try {
      dispatch(toggleLoading(true));
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCred.user;

      dispatch(setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
      }));
      navigate('/home');
    } catch (err) {
        if(err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unexpected error occurred. Please try again.');
        }
    } finally {
        dispatch(toggleLoading(false));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Sign Up</h2>

        {error && <p className={styles.error}>{error}</p>}

        <form className={styles.form} onSubmit={handleSignup}>
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
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.button} type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <p className={styles.linkText}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;