import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '../Auth/index';
import Loader from '../Loader/Loader';
import * as authSelectors from '../../redux/auth/authSelectors';
import routes from '../../routes/routes';
import ProtectedRoute from '../ProtectedRoute/index';

const App = ({ isLoading, isAuth }) => {
  return (
    <>
      {isLoading && <Loader />}
      {!isAuth && <Auth />}
      <Switch>
        <Route
          path={routes.REGISTRATION_PAGE.path}
          component={routes.REGISTRATION_PAGE.component}
        />
        <Route
          path={routes.LOGIN_PAGE.path}
          component={routes.LOGIN_PAGE.component}
        />
        <ProtectedRoute
          path={routes.MAIN_PAGE.path}
          component={routes.MAIN_PAGE.component}
        />
        <Redirect to={routes.LOGIN_PAGE.path} />
      </Switch>
    </>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  isLoading: authSelectors.getIsLoading(store),
  isAuth: authSelectors.getIsAuth(store),
});

export default connect(mapStateToProps)(App);
