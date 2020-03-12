import RegistrationPage from '../page/auth/Registration/index';
import LoginPage from '../page/auth/Login/index';
// eslint-disable-next-line import/no-cycle
import MainPage from '../page/MainPage';
import StatisticsPage from '../page/StatisticsPage';

export default {
  REGISTRATION_PAGE: {
    path: '/register',
    component: RegistrationPage,
  },
  LOGIN_PAGE: {
    path: '/login',
    component: LoginPage,
  },
  MAIN_PAGE: {
    path: '/main',
    component: MainPage,
  },
  STATISTICS_PAGE: {
    path: '/statistics',
    component: StatisticsPage,
  },
};
