import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import styles from './Auth.module.css';

const activeStyle = {
  fontWeight: '600',
  fontSize: 24,
  textDecoration: 'none',
  color: '#0a1e3f',
  transform: 'translate(5px, -14px)',
  fontFamily: 'Montserrat, sans-serif',
};

const Auth = () => {
  return (
    <div className={styles.wrap}>
      <header className={styles.logo}>
        <p>Checking</p>
      </header>

      <div className={styles.container}>
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
      </div>
    </div>
  );
};

export default Auth;
