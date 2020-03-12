import { connect } from 'react-redux';

import * as selectors from '../../redux/statistics/statisticsSelectors';
import * as operations from '../../redux/statistics/statisticsOperations';

import StatisticsSelectCategory from './StatisticsSelectCategory';

const mapStateToProps = store => ({
  category: selectors.getCategory(store),
});

const mapDispatchToProps = {
  setCategory: operations.setCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatisticsSelectCategory);
