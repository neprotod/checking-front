import * as tasksActions from './tasksActions';
import API from '../../../services/api';

export const filterToday = query => dispatch => {
  dispatch(tasksActions.todayStart());
  API.getTasks(query)
    .then(res => {
      if (res.data.length > 0) {
        dispatch(tasksActions.todaySuccess(res.data[0].tasks));
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
        dispatch(tasksActions.tomorrowSuccess(res.data[0].tasks));
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
        dispatch(tasksActions.next7DaysSuccess(res.data[0].tasks));
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
        dispatch(tasksActions.after7DaysSuccess(res.data[0].tasks));
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
        dispatch(tasksActions.burnedOutSuccess(res.data[0].tasks));
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
        dispatch(tasksActions.doneSuccess(res.data[0].tasks));
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
