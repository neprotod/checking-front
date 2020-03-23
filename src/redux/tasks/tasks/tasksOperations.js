import { Notyf } from 'notyf';
import * as tasksActions from './tasksActions';
import API from '../../../services/api';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

const doneOrBurnedFunc = tasks => tasks.filter(el => el.done !== true);
const sortTasksByDate = tasks => {
  return tasks.sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return dateA - dateB;
  });
};

export const filterToday = query => dispatch => {
  dispatch(tasksActions.todayStart());
  API.getTasks(query)
    .then(res => {
      if (res.data.length > 0) {
        const arrToday = doneOrBurnedFunc(res.data[0].tasks);
        const arrTodaySorted = sortTasksByDate(arrToday);
        dispatch(tasksActions.todaySuccess(arrTodaySorted));
      } else if (res.data.length === 0) {
        dispatch(tasksActions.todaySuccess(res.data));
      }
    })
    .catch(err => {
      notyf.error('Something went wrong!');
      dispatch(tasksActions.todayError(err));
    });
};

export const filterTomorrow = query => dispatch => {
  dispatch(tasksActions.tomorrowStart());
  API.getTasks(query)
    .then(res => {
      if (res.data.length > 0) {
        const arrTomorrow = doneOrBurnedFunc(res.data[0].tasks);
        const arrTomorrowSorted = sortTasksByDate(arrTomorrow);
        dispatch(tasksActions.tomorrowSuccess(arrTomorrowSorted));
      } else if (res.data.length === 0) {
        dispatch(tasksActions.tomorrowSuccess(res.data));
      }
    })
    .catch(err => {
      notyf.error('Something went wrong!');
      dispatch(tasksActions.tomorrowError(err));
    });
};

export const filterNext7Days = query => dispatch => {
  dispatch(tasksActions.next7DaysStart());
  API.getTasks(query)
    .then(res => {
      if (res.data.length > 0) {
        const arrNext7Days = doneOrBurnedFunc(res.data[0].tasks);
        const arrNext7DaysSorted = sortTasksByDate(arrNext7Days);
        dispatch(tasksActions.next7DaysSuccess(arrNext7DaysSorted));
      } else if (res.data.length === 0) {
        dispatch(tasksActions.next7DaysSuccess(res.data));
      }
    })
    .catch(err => {
      notyf.error('Something went wrong!');
      dispatch(tasksActions.next7DaysError(err));
    });
};

export const filterAfter7Days = query => dispatch => {
  dispatch(tasksActions.after7DaysStart());
  API.getTasks(query)
    .then(res => {
      if (res.data.length > 0) {
        const arrAfter7Days = doneOrBurnedFunc(res.data[0].tasks);
        const arrAfter7DaysSorted = sortTasksByDate(arrAfter7Days);
        dispatch(tasksActions.after7DaysSuccess(arrAfter7DaysSorted));
      } else if (res.data.length === 0) {
        dispatch(tasksActions.after7DaysSuccess(res.data));
      }
    })
    .catch(err => {
      notyf.error('Something went wrong!');
      dispatch(tasksActions.after7DaysError(err));
    });
};

export const filterBurnedOut = query => dispatch => {
  dispatch(tasksActions.burnedOutStart());
  API.getTasks(query)
    .then(res => {
      if (res.data.length > 0) {
        const arrBurnedOutSorted = sortTasksByDate(res.data[0].tasks);
        dispatch(tasksActions.burnedOutSuccess(arrBurnedOutSorted));
      } else if (res.data.length === 0) {
        dispatch(tasksActions.burnedOutSuccess(res.data));
      }
    })
    .catch(err => {
      notyf.error('Something went wrong!');
      dispatch(tasksActions.burnedOutError(err));
    });
};

export const filterDone = query => dispatch => {
  dispatch(tasksActions.doneStart());
  API.getTasks(query)
    .then(res => {
      if (res.data.length > 0) {
        const arrDone = sortTasksByDate(res.data[0].tasks);
        dispatch(tasksActions.doneSuccess(arrDone));
      } else if (res.data.length === 0) {
        dispatch(tasksActions.doneSuccess(res.data));
      }
    })
    .catch(err => {
      notyf.error('Something went wrong!');
      dispatch(tasksActions.doneError(err));
    });
};
