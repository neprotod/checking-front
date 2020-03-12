import * as actions from './statisticsActions';

import API from '../../services/api';

export const setTasksByDate = category => dispatch => {
  dispatch(actions.getTasksStart());

  API.getTasks(category)
    .then(res => {
      dispatch(actions.getTasksSuccess(res.data[0].tasks));
    })
    .catch(error => {
      dispatch(actions.getTasksError(error));
    });
};

export const setUserRoles = () => dispatch => {
  dispatch(actions.getStatisticsRolesStart());

  API.getAllUserRoles()
    .then(res => {
      dispatch(actions.getStatisticsRolesSuccess(res.data));
    })
    .catch(error => {
      dispatch(actions.getStatisticsRolesError(error));
    });
};

export const setCategory = category => dispatch => {
  dispatch(actions.setCategory(category));
};
