import rolesTypes from './roles/rolesTypes';
import priorityTypes from './priorities/prioritiesTypes';

const types = { ...rolesTypes, ...priorityTypes };

const formLoaderReducer = (state = false, { type }) => {
  switch (type) {
    case types.GET_ROLES_START:
    case types.GET_PRIORITIES_START:
    case types.ADD_ROLE_START:
    case types.UPDATE_ROLE_START:
    case types.DELETE_ROLE_START:
      return true;

    case types.GET_ROLES_SUCCESS:
    case types.GET_PRIORITIES_SUCCESS:
    case types.ADD_ROLE_SUCCESS:
    case types.UPDATE_ROLE_SUCCESS:
    case types.DELETE_ROLE_SUCCESS:
    case types.GET_ROLES_ERROR:
    case types.GET_PRIORITIES_ERROR:
    case types.ADD_ROLE_ERROR:
    case types.UPDATE_ROLE_ERROR:
    case types.DELETE_ROLE_ERROR:
      return false;

    default:
      return state;
  }
};

export default formLoaderReducer;
