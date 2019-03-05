import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthForm.module.scss';

const RegisterForm = ({
  email,
  password,
  birth,
  handleChange,
  handleKeyPress,
}) => (
  <div className={styles.form_wrapper}>
    <div className={styles.form}>
      <input
        className={styles.input_coulmn}
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <input
        className={styles.input_coulmn}
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
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
  </div>
);

export default RegisterForm;
