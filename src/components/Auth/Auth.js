import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import routes from '../../routes/routes';
import * as authSelectors from '../../redux/auth/authSelectors';
import ProtectedRoute from '../ProtectedRoute/index';
import styles from './Auth.module.css';
import imageAuth from '../../materials/imageAuth.jpg';

const activeStyle = {
  fontWeight: '600',
  fontSize: 24,
  textDecoration: 'none',
  color: '#0a1e3f',
  transform: 'translate(5px, -14px)',
  fontFamily: 'Montserrat, sans-serif',
};

const Auth = ({ isAuth }) => {
  return (
    <div className={styles.wrap}>
      <header className={styles.logo}>
        <p>LOGO</p>
      </header>
      <div className={styles.container}>
        {!isAuth && (
          <div className={styles.navigation}>
            <NavLink
              className={styles.nav}
              to={routes.REGISTRATION_PAGE.path}
              activeStyle={activeStyle}
            >
              Create Account
            </NavLink>
            <NavLink
              className={styles.nav}
              to={routes.LOGIN_PAGE.path}
              activeStyle={activeStyle}
            >
              Log in
            </NavLink>
          </div>
        )}
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
      </div>
      {!isAuth && (
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={imageAuth}
            alt="boy with lap book"
          />
        </div>
      )}
    </div>
  );
};

Auth.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = store => ({
  isAuth: authSelectors.getIsAuth(store),
});

export default connect(mapStateToProps)(Auth);
