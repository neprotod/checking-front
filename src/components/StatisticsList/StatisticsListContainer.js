import { connect } from 'react-redux';

import * as selectors from '../../redux/statistics/statisticsSelectors';

import StatisticsList from './StatisticsList';

const mapStateToProps = store => ({
  statistics: selectors.statistics(store),
});

export default connect(mapStateToProps, null)(StatisticsList);
