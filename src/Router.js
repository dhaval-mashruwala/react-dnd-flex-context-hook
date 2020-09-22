import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
/* Configure routes of the application */
const Routes = () => (
  <div className="App">
    <Switch>
    	<Route exact path='/' component={ Dashboard } />
      <Redirect from="/" to="/" />
    </Switch>
  </div>
)

export default Routes;
