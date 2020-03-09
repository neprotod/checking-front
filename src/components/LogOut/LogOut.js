import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-cycle
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import routes from '../../routes/routes';
import * as action from '../../redux/auth/authActions';

const Logout = ({ logout }) => {
  return (
    <NavLink onClick={logout} to={routes.LOGIN_PAGE.path}>
      Logout
    </NavLink>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(action.logOutStart()),
});

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Logout);
