import * as types from './statisticsTypes';

export const getTasksStart = () => ({
  type: types.GET_DATE_TASKS_START,
});

export const getTasksSuccess = tasks => ({
  type: types.GET_DATE_TASKS_SUCCESS,
  payload: { tasks },
});

export const getTasksError = error => ({
  type: types.GET_DATE_TASKS_ERROR,
  payload: { error },
});

export const getStatisticsRolesStart = () => ({
  type: types.GET_STATISTICS_ROLES_START,
});

export const getStatisticsRolesSuccess = roles => ({
  type: types.GET_STATISTICS_ROLES_SUCCESS,
  payload: { roles },
});

export const getStatisticsRolesError = error => ({
  type: types.GET_STATISTICS_ROLES_ERROR,
  payload: { error },
});

export const setCategory = category => ({
  type: types.SET_CATEGORY,
  payload: { category },
});
