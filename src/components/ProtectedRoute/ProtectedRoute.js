import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as authSelectors from '../../redux/auth/authSelectors';
import routes from '../../routes/routes';

const ProtectedRoute = ({ component: Component, isAuth, ...restProps }) => (
  <Route
    {...restProps}
    render={props =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routes.LOGIN_PAGE.path,
            // eslint-disable-next-line react/prop-types
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

ProtectedRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  isAuth: authSelectors.getIsAuth(store),
});

export default connect(mapStateToProps)(ProtectedRoute);
