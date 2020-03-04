import RegistrationPage from '../page/auth/Registration/index';
import LoginPage from '../page/auth/Login/index';
import MainPage from '../page/MainPage';

export default {
  REGISTRATION_PAGE: {
    path: '/register',
    component: RegistrationPage,
  },
  LOGIN_PAGE: {
    path: '/login',
    component: LoginPage,
  },
  // Вместо этого компонента Рома вставит свой
  MAIN_PAGE: {
    path: '/main',
    component: MainPage,
  },
};
