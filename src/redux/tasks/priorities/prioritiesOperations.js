import { Notyf } from 'notyf';
import API from '../../../services/api';
import * as prioritiesActions from './prioritiesActions';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

export const getPriorities = () => dispatch => {
  dispatch(prioritiesActions.getPrioritiesStart());

  API.getAllPriorities()
    .then(res => {
      if (res) dispatch(prioritiesActions.getPrioritiesSuccess(res.data));
    })
    .catch(err => {
      notyf.error('Can&#39;t load priorities');
      dispatch(prioritiesActions.getPrioritiesError(err));
    });
};

export const fn = () => {};
