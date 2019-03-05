import React from 'react';
import styles from './AuthWrapper.module.scss';
import LoginForm from '../AuthForm/LoginForm';
import RegisterForm from '../AuthForm/RegisterForm';

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
  );
};

export default AuthWrapper;
