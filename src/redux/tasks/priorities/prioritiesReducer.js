import types from './prioritiesTypes';

const prioritiesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_PRIORITIES_SUCCESS:
      return payload.priorities;

    case types.GET_PRIORITIES_ERROR:
      return state;

    default:
      return state;
  }
};

export default prioritiesReducer;
