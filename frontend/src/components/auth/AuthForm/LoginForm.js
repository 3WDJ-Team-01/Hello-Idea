import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthForm.module.scss';
import { FacebookLoginButton, GoogleLoginButton } from '../SocialLoginButton';

const LoginForm = ({ email, password, handleChange, handleKeyPress }) => (
  <div className={styles.form_wrapper}>
    <div className={styles.form}>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <div className={styles.auth_button}>LOGIN</div>
      <Link to="/auth/register" className={styles.description}>
        if you don't have an account...
      </Link>
    </div>
    <div className={styles.divider_wrapper}>
      <div className={styles.divider} />
      <div>or</div>
      <div className={styles.divider} />
    </div>
    <div className={styles.form}>
      <Link to="/*" className={styles.button}>
        <FacebookLoginButton />
      </Link>
      <Link to="/*" className={styles.button}>
        <GoogleLoginButton />
      </Link>
    </div>
  </div>
);

export default LoginForm;
