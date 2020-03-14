import tasksTypes from './tasks/tasksTypes';

const types = { ...tasksTypes };

const tasksLoaderReducer = (state = false, { type }) => {
  switch (type) {
    case types.TODAY_START:
    case types.TOMORROW_START:
    case types.NEXT_7_DAYS_START:
    case types.AFTER_7_DAYS_START:
    case types.BURNED_OUT_START:
    case types.DONE_START:
      return true;

    case types.TODAY_SUCCESS:
    case types.TOMORROW_SUCCESS:
    case types.NEXT_7_DAYS_SUCCESS:
    case types.AFTER_7_DAYS_SUCCESS:
    case types.BURNED_OUT_SUCCESS:
    case types.DONE_SUCCESS:
    case types.TODAY_ERROR:
    case types.TOMORROW_ERROR:
    case types.NEXT_7_DAYS_ERROR:
    case types.AFTER_7_DAYS_ERROR:
    case types.BURNED_OUT_ERROR:
    case types.DONE_ERROR:
      return false;

    default:
      return state;
  }
};

export default tasksLoaderReducer;
