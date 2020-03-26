import * as tasksActions from './tasksActions';
import API from '../../../services/api';

const nowTime = Date.parse(new Date());

const isTaskDone = tasks => tasks.filter(el => el.done !== true);
const isTaskBurned = tasks =>
  tasks.filter(el => (Date.parse(el.end_date) - nowTime) / 1000 / 60 > 0);
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
        const arrTodayNotDone = isTaskDone(res.data[0].tasks);
        const arrTodayNotBurned = isTaskBurned(arrTodayNotDone);
        const arrTodaySorted = sortTasksByDate(arrTodayNotBurned);
        dispatch(tasksActions.todaySuccess(arrTodaySorted));
      } else if (res.data.length === 0) {
        dispatch(tasksActions.todaySuccess(res.data));
      }
    })
    .catch(err => {
      localStorage.clear();
      window.location.reload(true);
      dispatch(tasksActions.todayError(err));
    });
};

export const filterTomorrow = query => dispatch => {
  dispatch(tasksActions.tomorrowStart());
  API.getTasks(query)
    .then(res => {
      if (res.data.length > 0) {
        const arrTomorrowNotDone = isTaskDone(res.data[0].tasks);
        const arrTomorrowNotBurned = isTaskBurned(arrTomorrowNotDone);
        const arrTomorrowSorted = sortTasksByDate(arrTomorrowNotBurned);
        dispatch(tasksActions.tomorrowSuccess(arrTomorrowSorted));
      } else if (res.data.length === 0) {
        dispatch(tasksActions.tomorrowSuccess(res.data));
      }
    })
    .catch(err => {
      localStorage.clear();
      window.location.reload(true);
      dispatch(tasksActions.tomorrowError(err));
    });
};

export const filterNext7Days = query => dispatch => {
  dispatch(tasksActions.next7DaysStart());
  API.getTasks(query)
    .then(res => {
      if (res.data.length > 0) {
        const arrNext7DaysNotDone = isTaskDone(res.data[0].tasks);
        const arrNext7DaysNotBurned = isTaskBurned(arrNext7DaysNotDone);
        const arrNext7DaysSorted = sortTasksByDate(arrNext7DaysNotBurned);
        dispatch(tasksActions.next7DaysSuccess(arrNext7DaysSorted));
      } else if (res.data.length === 0) {
        dispatch(tasksActions.next7DaysSuccess(res.data));
      }
    })
    .catch(err => {
      localStorage.clear();
      window.location.reload(true);
      dispatch(tasksActions.next7DaysError(err));
    });
};

export const filterAfter7Days = query => dispatch => {
  dispatch(tasksActions.after7DaysStart());
  API.getTasks(query)
    .then(res => {
      if (res.data.length > 0) {
        const arrAfter7DaysNotDone = isTaskDone(res.data[0].tasks);
        const arrAfter7DaysNotBurned = isTaskBurned(arrAfter7DaysNotDone);
        const arrAfter7DaysSorted = sortTasksByDate(arrAfter7DaysNotBurned);
        dispatch(tasksActions.after7DaysSuccess(arrAfter7DaysSorted));
      } else if (res.data.length === 0) {
        dispatch(tasksActions.after7DaysSuccess(res.data));
      }
    })
    .catch(err => {
      localStorage.clear();
      window.location.reload(true);
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
      localStorage.clear();
      window.location.reload(true);
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
      localStorage.clear();
      window.location.reload(true);
      dispatch(tasksActions.doneError(err));
    });
};
