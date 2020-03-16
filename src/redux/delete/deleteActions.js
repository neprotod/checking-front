import * as deleteTypes from './deleteTypes';

export const deleteTaskStart = () => {
  return {
    type: deleteTypes.DELETE_TASK_START,
  };
};

export const deleteTaskSuccess = id => {
  return {
    type: deleteTypes.DELETE_TASK_SUCCESS,
    payload: {
      id,
    },
  };
};

export const deleteTaskError = error => {
  return {
    type: deleteTypes.DELETE_TASK_ERROR,
    payload: {
      error,
    },
  };
};
