import * as actions from './statisticsActions';

import API from '../../services/api';

const setTasksByDate = category => dispatch => {
  dispatch(actions.getTasksStart());

  API.getTasks(category)
    .then(res => {
      dispatch(actions.getTasksSuccess(res.data));
    })
    .catch(error => {
      dispatch(actions.getTasksError(error));
    });
};

export default setTasksByDate;
