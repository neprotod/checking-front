import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-cycle
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import routes from '../../routes/routes';
import * as authOperations from '../../redux/auth/authOperations';

const Logout = ({ logout }) => {
  return (
    <NavLink onClick={logout} to={routes.LOGIN_PAGE.path}>
      Logout
    </NavLink>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authOperations.logOut()),
});

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Logout);
