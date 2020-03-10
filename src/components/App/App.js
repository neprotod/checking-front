import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Auth from '../Auth/index';
import StatisticsPage from '../../page/StatisticsPage';
import Loader from '../Loader/Loader';
import * as authSelectors from '../../redux/auth/authSelectors';

const App = ({ isLoading }) => {
  return (
    <>
      {isLoading && <Loader />}
      <Auth />
      <StatisticsPage />
    </>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
const mapStateToProps = store => ({
  isLoading: authSelectors.getIsLoading(store),
});

export default connect(mapStateToProps)(App);
