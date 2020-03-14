import { connect } from 'react-redux';
import CreateTask from './CreateTask';
import * as tasksSelectors from '../../redux/tasks/tasks/tasksSelectors';

const mapStateToProps = store => ({
  isFormLoading: tasksSelectors.isFormLoading(store),
});

export default connect(mapStateToProps)(CreateTask);
