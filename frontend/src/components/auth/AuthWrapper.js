import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import styles from './AuthWrapper.module.scss';

const LoginForm = () => (
  <>
    <div className={styles.form}>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
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
      <Link to="/*" className={`${styles.social_button} ${styles.facebook}`}>
        <FaFacebookSquare />
        <span>Facebook Login...</span>
      </Link>
      <Link to="/*" className={`${styles.social_button} ${styles.google}`}>
        <FaGoogle />
        <span>Google Login...</span>
      </Link>
    </div>
  </>
);

const RegisterForm = () => (
  <>
    <div className={styles.form}>
      <input className={styles.input_coulmn} type="email" placeholder="email" />
      <input
        className={styles.input_coulmn}
        type="password"
        placeholder="password"
      />
      <input
        className={styles.input_coulmn}
        type="password"
        placeholder="retype password"
      />
      <div className={styles.date}>
        <input className={styles.input_row} type="number" placeholder="Year" />
        <input className={styles.input_row} type="number" placeholder="Month" />
        <input className={styles.input_row} type="number" placeholder="day" />
      </div>
      <div className={styles.auth_button}>REGISTER</div>
      <Link to="/auth/login" className={styles.description}>
        if you already have account...
      </Link>
    </div>
  </>
);

const AuthWrapper = ({ kind }) => (
  <div className={styles.auth_form}>
    <div className={styles.title}>Hello Idea !</div>
    <div className={styles.form_wrapper}>
      {kind === 'login' ? <LoginForm /> : <RegisterForm />}
    </div>
  </div>
);

export default AuthWrapper;
