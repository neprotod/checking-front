import * as deleteActions from './deleteActions';

import API from '../../services/api';

const deleteTask = id => dispatch => {
  dispatch(deleteActions.deleteTaskStart());

  API.deleteTask(id)
    .then(() => dispatch(deleteActions.deleteTaskSuccess(id)))
    .catch(error => dispatch(deleteActions.deleteTaskError(error)));
};

export default deleteTask;
