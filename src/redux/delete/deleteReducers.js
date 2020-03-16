import { combineReducers } from 'redux';

import * as deleteTypes from './deleteTypes';

const deleteTaskReducer = (state = [], { type, payload }) => {
  switch (type) {
    case deleteTypes.DELETE_TASK_SUCCESS:
      return state.filter(task => task.id !== payload.id);

    default:
      return state;
  }
};

const loadingTaskReducer = (state = false, { type }) => {
  switch (type) {
    case deleteTypes.DELETE_TASK_START:
      return true;

    case deleteTypes.DELETE_TASK_SUCCESS:
    case deleteTypes.DELETE_TASK_ERROR:
      return false;

    default:
      return state;
  }
};

const errorTaskReducer = (state = null, { type, payload }) => {
  switch (type) {
    case deleteTypes.DELETE_TASK_START:
      return null;

    case deleteTypes.DELETE_TASK_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  deleteTaskReducer,
  loadingTaskReducer,
  errorTaskReducer,
});
