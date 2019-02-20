import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import styles from './AuthWrapper.module.scss';

const LoginForm = ({ email, password, handleChange, handleKeyPress }) => (
  <>
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

const RegisterForm = ({
  email,
  password,
  birth,
  handleChange,
  handleKeyPress,
}) => (
  <>
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
  </>
);

const AuthWrapper = ({
  kind,
  onChangeInput,
  email,
  password,
  birth,
  onLogin,
  onRegister,
  error,
}) => {
  const handleChange = e => {
    const { name, value } = e.target;
    onChangeInput({ name, value });
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      switch (kind) {
        case 'login':
          onLogin();
          break;
        case 'register':
          onRegister();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className={styles.auth_form}>
      <div className={styles.title}>Hello Idea !</div>
      <div className={styles.form_wrapper}>
        {kind === 'login' ? (
          <LoginForm
            email={email}
            password={password}
            birth={birth}
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
          />
        ) : (
          <RegisterForm
            email={email}
            password={password}
            birth={birth}
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
          />
        )}
      </div>
    </div>
  );
};

export default AuthWrapper;
