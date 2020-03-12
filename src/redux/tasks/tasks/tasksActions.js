import types from './tasksTypes';

export const tasksStart = () => ({
  type: types.TASKS_START,
});

export const tasksSuccess = tasks => ({
  type: types.TASKS_SUCCESS,
  payload: { tasks },
});

export const tasksError = error => ({
  type: types.TASKS_ERROR,
  payload: { error },
});

export const todayStart = () => ({
  type: types.TODAY_START,
});

export const todaySuccess = today => ({
  type: types.TODAY_SUCCESS,
  payload: { today },
});

export const todayError = error => ({
  type: types.TODAY_ERROR,
  payload: { error },
});

export const tomorrowStart = () => ({
  type: types.TOMORROW_START,
});

export const tomorrowSuccess = tomorrow => ({
  type: types.TOMORROW_SUCCESS,
  payload: { tomorrow },
});

export const tomorrowError = error => ({
  type: types.TOMORROW_ERROR,
  payload: { error },
});

export const next7DaysStart = () => ({
  type: types.NEXT_7_DAYS_START,
});

export const next7DaysSuccess = next7Days => ({
  type: types.NEXT_7_DAYS_SUCCESS,
  payload: { next7Days },
});

export const next7DaysError = error => ({
  type: types.NEXT_7_DAYS_ERROR,
  payload: { error },
});

export const after7DaysStart = () => ({
  type: types.AFTER_7_DAYS_START,
});

export const after7DaysSuccess = after7Days => ({
  type: types.AFTER_7_DAYS_SUCCESS,
  payload: { after7Days },
});

export const after7DaysError = error => ({
  type: types.AFTER_7_DAYS_ERROR,
  payload: { error },
});

export const burnedOutStart = () => ({
  type: types.BURNED_OUT_START,
});

export const burnedOutSuccess = burnedOut => ({
  type: types.BURNED_OUT_SUCCESS,
  payload: { burnedOut },
});

export const burnedOutError = error => ({
  type: types.BURNED_OUT_ERROR,
  payload: { error },
});

export const doneStart = () => ({
  type: types.DONE_START,
});

export const doneSuccess = done => ({
  type: types.DONE_SUCCESS,
  payload: { done },
});

export const doneError = error => ({
  type: types.DONE_ERROR,
  payload: { error },
});
