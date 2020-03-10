import { combineReducers } from 'redux';

import * as types from './statisticsTypes';

const dateTasks = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_DATE_TASKS_SUCCESS:
      return payload.tasks;

    default:
      return state;
  }
};

const statisticsRoles = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_STATISTICS_ROLES_SUCCESS:
      return payload.roles;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.GET_DATE_TASKS_ERROR:
    case types.GET_STATISTICS_ROLES_ERROR:
      return payload.error;

    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case types.GET_DATE_TASKS_START:
    case types.GET_STATISTICS_ROLES_START:
      return true;

    case types.GET_DATE_TASKS_SUCCESS:
    case types.GET_STATISTICS_ROLES_SUCCESS:
    case types.GET_DATE_TASKS_ERROR:
    case types.GET_STATISTICS_ROLES_ERROR:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  dateTasks,
  statisticsRoles,
  error,
  isLoading,
});
