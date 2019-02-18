import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthWrapper } from '../components/auth';

export class AuthContainer extends Component {
  render() {
    const { kind } = this.props;

    return <AuthWrapper kind={kind} />;
  }
}

export default withRouter(AuthContainer);
