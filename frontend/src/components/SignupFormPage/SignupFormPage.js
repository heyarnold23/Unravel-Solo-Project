import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from './SignupForm.module.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div id={styles.formHolder}>
    <div className={styles.loginText}>
       <h2> Sign Up </h2>
      </div>
    <form onSubmit={handleSubmit} id={styles.form}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div id={styles.username}>
      <label>
        Email
        <div>
        <input
         className={styles.usernameInput}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
      </label>
      </div>
      <div id={styles.password}>
      <label>
        Username
      <div>
        <input
         className={styles.usernameInput}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <div id={styles.password}>
      <label>
        Confirm Password
        <div>
        <input
          className={styles.usernameInput}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        </div>
      </label>
      </div>
      <div>
      <button className={styles.logInButton} type="submit">Sign Up</button>
      </div>
    </form>
    </div>
  );
}

export default SignupFormPage;
