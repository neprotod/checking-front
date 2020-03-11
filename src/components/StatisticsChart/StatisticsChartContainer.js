import { connect } from 'react-redux';

import * as selectors from '../../redux/statistics/statisticsSelectors';
import * as operations from '../../redux/statistics/statisticsOperations';

import StatisticsChart from './StatisticsChart';

const mapStateToProps = store => ({
  category: selectors.getCategory(store),
});

const mapDispatchToProps = {
  setCategory: operations.setCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsChart);
