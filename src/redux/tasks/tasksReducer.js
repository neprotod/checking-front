import { combineReducers } from 'redux';
import tasksReducers from './tasks/tasksReducers';
import rolesReducer from './roles/rolesReducer';
import prioritiesReducer from './priorities/prioritiesReducer';
import tasksLoaderReducer from './tasksLoaderReducer';
import formLoaderReducer from './formLoaderReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  tasks: tasksReducers,
  roles: rolesReducer,
  priorities: prioritiesReducer,
  isTasksLoading: tasksLoaderReducer,
  isFormLoading: formLoaderReducer,
  error: errorReducer,
});
