import types from './rolesTypes';

// Get roles actions

export const getRolesStart = () => ({
  type: types.GET_ROLES_START,
});

export const getRolesSuccess = roles => ({
  type: types.GET_ROLES_SUCCESS,
  payload: {
    roles,
  },
});

export const getRolesError = error => ({
  type: types.GET_ROLES_ERROR,
  payload: {
    error,
  },
});

// Add role actions

export const addRoleStart = () => ({
  type: types.ADD_ROLE_START,
});

export const addRoleSuccess = role => ({
  type: types.ADD_ROLE_SUCCESS,
  payload: {
    role,
  },
});

export const addRoleError = error => ({
  type: types.ADD_ROLE_ERROR,
  payload: {
    error,
  },
});

// Update role actions

export const updateRoleStart = () => ({
  type: types.UPDATE_ROLE_START,
});

export const updateRoleSuccess = (id, data) => ({
  type: types.UPDATE_ROLE_SUCCESS,
  payload: {
    id,
    data,
  },
});

export const updateRoleError = error => ({
  type: types.UPDATE_ROLE_ERROR,
  payload: {
    error,
  },
});

// Delete expense actions

export const deleteRoleStart = () => ({
  type: types.DELETE_ROLE_START,
});

export const deleteRoleSuccess = id => ({
  type: types.DELETE_ROLE_SUCCESS,
  payload: {
    id,
  },
});

export const deleteRoleError = error => ({
  type: types.DELETE_ROLE_ERROR,
  payload: {
    error,
  },
});
