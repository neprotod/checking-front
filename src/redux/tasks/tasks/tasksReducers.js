import { combineReducers } from 'redux';
import types from './tasksTypes';

const tasksToday = (state = [], { type, payload }) => {
  switch (type) {
    case types.TODAY_SUCCESS:
      return payload.today;
    default:
      return state;
  }
};

const tasksTomorrow = (state = [], { type, payload }) => {
  switch (type) {
    case types.TOMORROW_SUCCESS:
      return payload.tomorrow;
    default:
      return state;
  }
};

const tasksNext7Days = (state = [], { type, payload }) => {
  switch (type) {
    case types.NEXT_7_DAYS_SUCCESS:
      return payload.next7Days;
    default:
      return state;
  }
};

const tasksAfter7Days = (state = [], { type, payload }) => {
  switch (type) {
    case types.AFTER_7_DAYS_SUCCESS:
      return payload.after7Days;
    default:
      return state;
  }
};

const tasksBurnedOut = (state = [], { type, payload }) => {
  switch (type) {
    case types.BURNED_OUT_SUCCESS:
      return payload.burnedOut;
    default:
      return state;
  }
};

const tasksDone = (state = [], { type, payload }) => {
  switch (type) {
    case types.DONE_SUCCESS:
      return payload.done;
    default:
      return state;
  }
};

export default combineReducers({
  tasksToday,
  tasksTomorrow,
  tasksNext7Days,
  tasksAfter7Days,
  tasksBurnedOut,
  tasksDone,
});
