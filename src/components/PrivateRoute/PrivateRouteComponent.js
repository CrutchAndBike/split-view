import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRoute = withRouter(({ component: Component, isAuthorized, ...rest }) => (
    <Route {...rest} render={(props) => (
      isAuthorized
      ? <Component {...props} />
      : <Redirect to='/auth'/>
    )} />
))

export default PrivateRoute;
  