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

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.getTasksError:
      return payload.error;

    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case types.getTasksStart:
      return true;

    case types.getTasksSuccess:
    case types.getTasksError:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  dateTasks,
  error,
  isLoading,
});
