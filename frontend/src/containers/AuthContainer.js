import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthWrapper from '../components/auth';
import * as authActions from '../store/modules/auth';

export class AuthContainer extends Component {
  componentDidMount() {
    const { history, kind } = this.props;
    const validate = /(login|register)/;

    if (!validate.test(kind)) {
      history.push('/');
    } else {
      this.initialize();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { kind } = this.props;
    if (prevProps.kind !== kind) {
      this.initialize();
    }
  }

  initialize = () => {
    const { initializeInput, initializeError } = this.props;
    initializeError();
    initializeInput();
  };

  handleChangeInput = ({ name, value }) => {
    const { changeInput } = this.props;
    changeInput({ name, value });
  };

  handleLogin = () => {
    const { login } = this.props;
    login();
  };

  handleRegister = () => {
    const { register } = this.props;
    register();
  };

  render() {
    const { kind, email, password, birth, error } = this.props;
    const { handleChangeInput, handleLogin, handleRegister } = this;

    return (
      <AuthWrapper
        kind={kind}
        email={email}
        password={password}
        birth={birth}
        onChangeInput={handleChangeInput}
        onLogin={handleLogin}
        onRegister={handleRegister}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.form.email,
  password: state.auth.form.password,
  birth: state.auth.form.birth,
  error: state.auth.error,
  logged: state.auth.logged,
});

const mapDispatchToProps = dispatch => ({
  initializeInput: () => {
    dispatch(authActions.initializeInput());
  },
  changeInput: ({ name, value }) => {
    dispatch(authActions.changeInput({ name, value }));
  },
  initializeError: () => {
    dispatch(authActions.initializeError());
  },
  register: () => {
    dispatch(authActions.register());
  },
  login: () => {
    dispatch(authActions.login());
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AuthContainer),
);
