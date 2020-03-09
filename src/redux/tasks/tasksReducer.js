import { combineReducers } from 'redux';
import rolesReducer from './roles/rolesReducer';
import prioritiesReducer from './priorities/prioritiesReducer';
import formLoaderReducer from './formLoaderReducer';

export default combineReducers({
  roles: rolesReducer,
  priorities: prioritiesReducer,
  isFormLoading: formLoaderReducer,
});
