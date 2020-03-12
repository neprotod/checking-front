import types from './prioritiesTypes';

export const getPrioritiesStart = () => ({
  type: types.GET_PRIORITIES_START,
});

export const getPrioritiesSuccess = priorities => ({
  type: types.GET_PRIORITIES_SUCCESS,
  payload: {
    priorities,
  },
});

export const getPrioritiesError = error => ({
  type: types.GET_PRIORITIES_ERROR,
  payload: {
    error,
  },
});
