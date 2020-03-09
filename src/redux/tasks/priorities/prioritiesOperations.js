import API from '../../../services/api';
import * as prioritiesActions from './prioritiesActions';

export const getPriorities = () => dispatch => {
  dispatch(prioritiesActions.getPrioritiesStart());

  API.getAllPriorities()
    .then(res => dispatch(prioritiesActions.getPrioritiesSuccess(res.data)))
    .catch(err => dispatch(prioritiesActions.getPrioritiesError(err)));
};

export const fn = () => {};
