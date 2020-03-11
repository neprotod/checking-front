import { connect } from 'react-redux';

import * as selectors from '../../redux/statistics/statisticsSelectors';

import Statistics from './Statistics';

const mapStateToProps = store => ({
  statistics: selectors.statistics(store),
});

export default connect(mapStateToProps, null)(Statistics);
