import { combineReducers } from 'redux';

import * as types from './statisticsActions';

const dateTasks = (state = [], { type, payload }) => {
  switch (type) {
    case types.getTasksSuccess:
      return payload.tasks;

    default:
      return state;
  }
};

const statisticsRoles = (state = [], { type, payload }) => {
  switch (type) {
    case types.getStatisticsRolesSuccess:
      return payload.roles;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.getTasksError:
    case types.getStatisticsRolesError:
      return payload.error;

    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case types.getTasksStart:
    case types.getStatisticsRolesStart:
      return true;

    case types.getTasksSuccess:
    case types.getStatisticsRolesSuccess:
    case types.getTasksError:
    case types.getStatisticsRolesError:
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
