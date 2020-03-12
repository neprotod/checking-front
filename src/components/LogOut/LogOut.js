import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as authOperations from '../../redux/auth/authOperations';
import style from './LogOut.module.css';

const Logout = ({ logout }) => {
  return (
    <button type="button" className={style.logoutButton} onClick={logout}>
      Logout
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authOperations.logOut()),
});

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Logout);
