import React from 'react';
import {Route, IndexRoute} from 'react-router';
import LayoutContainer from './containers/LayoutContainer';
import {LoginView, DashboardView} from './views';
import requireAuthentication from './components/AuthenticatedComponent';

export default (
  
  <Route path="/" component={LayoutContainer}>
    <IndexRoute  component={requireAuthentication(DashboardView)}/>
    <Route path="login" component={LoginView}/>
  </Route>
);