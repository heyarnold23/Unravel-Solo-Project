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

  return (
    <div id={styles.formHolder}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} id={styles.form}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>

        <div id={styles.username}>
          <label>
            Username or Email
            <div>
              <input
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
          </label>
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
