import API from '../../../services/api';
import * as rolesActions from './rolesActions';

export const getRoles = () => dispatch => {
  dispatch(rolesActions.getRolesStart());

  API.getAllUserRoles()

    .then(res => dispatch(rolesActions.getRolesSuccess(res.data)))
    .catch(err => dispatch(rolesActions.getRolesError(err)));
};

export const addRole = role => dispatch => {
  dispatch(rolesActions.addRoleStart());

  API.createRole(role)
    .then(res => dispatch(rolesActions.addRoleSuccess(res.data)))
    .catch(err => dispatch(rolesActions.addRoleError(err)));
};

export const updateRole = (id, data) => dispatch => {
  dispatch(rolesActions.updateRoleStart());

  API.updateRole(id, data)
    .then(dispatch(rolesActions.updateRoleSuccess(id, data)))
    .catch(err => dispatch(rolesActions.updateRoleError(err)));
};

export const deleteRole = id => dispatch => {
  dispatch(rolesActions.deleteRoleStart());

  API.deleteRole(id)
    .then(dispatch(rolesActions.deleteRoleSuccess(id)))
    .catch(err => dispatch(rolesActions.deleteRoleError(err)));
};
