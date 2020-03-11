import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authReducer';
import statisticsReducer from './statistics/statisticsReducers';
import tasksReducer from './tasks/tasksReducer';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAuth'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  tasks: tasksReducer,
  statistics: statisticsReducer,
});

export default rootReducer;
