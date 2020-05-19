import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Principal from '../pages/Principal';

const Router: React.FC = () => (
  <Switch>
    <Route path='/' component={Principal} />
  </Switch>
);

export default Router;
