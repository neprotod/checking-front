import * as types from './statisticsTypes';

export const getTasksStart = () => ({
  type: types.GET_DATE_TASKS_START,
});

export const getTasksSuccess = tasks => ({
  type: types.GET_DATE_TASKS_SUCCESS,
  payload: { tasks },
});

export const getTasksError = error => ({
  typee: types.GET_DATE_TASKS_ERROR,
  payload: { error },
});
