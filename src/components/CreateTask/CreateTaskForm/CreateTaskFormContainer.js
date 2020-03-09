import { connect } from 'react-redux';
import CreateTaskForm from './CreateTaskForm';
import * as rolesSelectors from '../../../redux/tasks/roles/rolesSelectors';
import * as rolesOperations from '../../../redux/tasks/roles/rolesOperations';
import * as prioritiesSelectors from '../../../redux/tasks/priorities/prioritiesSelectors';
import * as prioritiesOperations from '../../../redux/tasks/priorities/prioritiesOperations';

const mapStateToProps = store => ({
  roles: rolesSelectors.roles(store),
  priorities: prioritiesSelectors.priorities(store),
});

const mapDispatchToProps = dispatch => ({
  getRoles: () => dispatch(rolesOperations.getRoles()),
  getPriorities: () => dispatch(prioritiesOperations.getPriorities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm);
