import { Notyf } from 'notyf';
import API from '../../../services/api';
import * as rolesActions from './rolesActions';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

export const getRoles = () => dispatch => {
  dispatch(rolesActions.getRolesStart());

  API.getAllUserRoles()
    .then(res => {
      if (res) dispatch(rolesActions.getRolesSuccess(res.data));
    })
    .catch(err => {
      notyf.error('Can&#39;t load roles');
      dispatch(rolesActions.getRolesError(err));
    });
};

export const addRole = role => dispatch => {
  dispatch(rolesActions.addRoleStart());

  API.createRole(role)
    .then(res => {
      if (res) dispatch(rolesActions.addRoleSuccess(res.data));
    })
    .catch(err => {
      notyf.error('Error while adding a role');
      dispatch(rolesActions.addRoleError(err));
    });
};

export const updateRole = (id, data) => dispatch => {
  dispatch(rolesActions.updateRoleStart());

  API.updateRole(id, data)
    .then(res => {
      if (res) dispatch(rolesActions.updateRoleSuccess(id, data));
    })
    .catch(err => {
      notyf.error('Error while updating a role');
      dispatch(rolesActions.updateRoleError(err));
    });
};

export const deleteRole = id => dispatch => {
  dispatch(rolesActions.deleteRoleStart());

  API.deleteRole(id)
    .then(res => {
      if (res) dispatch(rolesActions.deleteRoleSuccess(id));
    })
    .catch(err => {
      if (err.response.status === 409) {
        notyf.error('Can&#39;t delete role. It&#39;s used in tasks');
      } else {
        notyf.error('Error while deleting a role');
      }
      dispatch(rolesActions.deleteRoleError(err));
    });
};
