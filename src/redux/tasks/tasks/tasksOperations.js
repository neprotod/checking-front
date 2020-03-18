import { Notyf } from 'notyf';
import * as tasksActions from './tasksActions';
import API from '../../../services/api';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

export const filterToday = query => dispatch => {
  dispatch(tasksActions.todayStart());
  API.getTasks(query)
    .then(res => {
      if (res.data.length > 0) {
        const arrToday = res.data[0].tasks.filter(el => el.done !== true);
        dispatch(tasksActions.todaySuccess(arrToday));
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
        const arrTomorrow = res.data[0].tasks.filter(el => el.done !== true);
        dispatch(tasksActions.tomorrowSuccess(arrTomorrow));
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
        const arrNext7Days = res.data[0].tasks.filter(el => el.done !== true);
        dispatch(tasksActions.next7DaysSuccess(arrNext7Days));
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
        const arrAfter7Days = res.data[0].tasks.filter(el => el.done !== true);
        dispatch(tasksActions.after7DaysSuccess(arrAfter7Days));
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
        dispatch(tasksActions.burnedOutSuccess(res.data[0].tasks));
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
        dispatch(tasksActions.doneSuccess(res.data[0].tasks));
      } else if (res.data.length === 0) {
        dispatch(tasksActions.doneSuccess(res.data));
      }
    })
    .catch(err => {
      notyf.error('Something went wrong!');
      dispatch(tasksActions.doneError(err));
    });
};
