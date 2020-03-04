import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as authSelectors from '../redux/auth/authSelectors';

const withAuthRedirect = BaseComponent => {
  const WithAuthRedirect = ({ isAuth, ...restProps }) => {
    return isAuth ? (
      <Redirect to="/main" />
    ) : (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <BaseComponent {...restProps} />
    );
  };
  WithAuthRedirect.propTypes = {
    isAuth: PropTypes.bool.isRequired,
  };

  const mapStateToProps = store => ({
    isAuth: authSelectors.getIsAuth(store),
  });
  return connect(mapStateToProps)(WithAuthRedirect);
};
export default withAuthRedirect;
