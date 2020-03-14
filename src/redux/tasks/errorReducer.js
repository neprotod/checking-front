import rolesTypes from './roles/rolesTypes';
import priorityTypes from './priorities/prioritiesTypes';
import tasksTypes from './tasks/tasksTypes';

const types = { ...tasksTypes, ...rolesTypes, ...priorityTypes };

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.TODAY_SUCCESS:
    case types.TOMORROW_SUCCESS:
    case types.NEXT_7_DAYS_SUCCESS:
    case types.AFTER_7_DAYS_SUCCESS:
    case types.BURNED_OUT_SUCCESS:
    case types.DONE_SUCCESS:
    case types.GET_ROLES_START:
    case types.GET_PRIORITIES_START:
    case types.ADD_ROLE_START:
    case types.UPDATE_ROLE_START:
    case types.DELETE_ROLE_START:
      return null;

    case types.TODAY_ERROR:
    case types.TOMORROW_ERROR:
    case types.NEXT_7_DAYS_ERROR:
    case types.AFTER_7_DAYS_ERROR:
    case types.BURNED_OUT_ERROR:
    case types.DONE_ERROR:
    case types.GET_ROLES_ERROR:
    case types.GET_PRIORITIES_ERROR:
    case types.ADD_ROLE_ERROR:
    case types.UPDATE_ROLE_ERROR:
    case types.DELETE_ROLE_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default errorReducer;
