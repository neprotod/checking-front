import { connect } from 'react-redux';
import CreateRoleForm from './CreateRoleForm';
import * as rolesSelectors from '../../../redux/tasks/roles/rolesSelectors';
import * as rolesOperations from '../../../redux/tasks/roles/rolesOperations';

const mapStateToProps = store => ({
  roles: rolesSelectors.roles(store),
});

const mapDispatchToProps = dispatch => ({
  getRoles: () => dispatch(rolesOperations.getRoles()),
  addRole: role => dispatch(rolesOperations.addRole(role)),
  updateRole: (id, data) => dispatch(rolesOperations.updateRole(id, data)),
  deleteRole: id => dispatch(rolesOperations.deleteRole(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoleForm);
