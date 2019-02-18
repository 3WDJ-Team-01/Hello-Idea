import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main, Auth, NotFound } from './pages';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/auth/:kind" exact component={Auth} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Root;
