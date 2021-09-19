import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';


function LoginForm() {
  const dispatch = useDispatch();
//   const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

//   if (sessionUser) return (
//     <Redirect to="/" />
//   );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const demoSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div id={styles.formHolder}>
      <div className={styles.loginText}>
       <h2> Sign In </h2>
      </div>
      <form onSubmit={handleSubmit} id={styles.form}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div id={styles.username}>
          <label>
            Username or Email
            <div>
              <input
                className={styles.usernameInput}
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                />
            </div>
          </label>
        </div>
        <div id={styles.password}>
          <label>
            Password
            <div>
            <input
              className={styles.usernameInput}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
          </label>
        </div>
        <div>
        <button className={styles.logInButton} type="submit">Log In</button>
        </div>
      </form>
      <div className={styles.demo}>
        <form onSubmit={demoSubmit}>
          <button className={styles.demoButton}type="submit">Demo Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
