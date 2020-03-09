/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import * as authOperations from '../../../redux/auth/authOperations';
import * as authActions from '../../../redux/auth/authActions';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import * as authSelectors from '../../../redux/auth/authSelectors';
import styles from './Login.module.css';
import googleIcon from '../../../materials/svg/icons8-google.svg';

const Login = ({ location, onLogin, onGoogle }) => {
  if (location.search) {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      onGoogle(token);
    }
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(field, { resetForm }) => {
        const user = {
          email: field.email,
          password: field.password,
        };
        onLogin(user);
        resetForm({});
      }}
      render={() => {
        return (
          <>
            <Form className={styles.form}>
              <p className={styles.title}>Take control of your life.</p>
              <p className={styles.title}>Just check in.</p>
              <div className={styles.container}>
                <label htmlFor="email">
                  E-mail<span className={styles.span}>*</span>
                </label>
                <Field
                  placeholder="your@email.com"
                  name="email"
                  type="email"
                  className={styles.inputOne}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
                <label htmlFor="password">
                  Password<span className={styles.span}>*</span>
                </label>
                <Field
                  placeholder="yourpassword"
                  name="password"
                  type="password"
                  className={styles.inputTwo}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </div>
              <button type="submit" className={styles.btn}>
                Log in
              </button>
              <a
                href="http://localhost:3030/api/user/google"
                className={styles.googleSignUpButton}
              >
                <div className={styles.googleBtnContentWraper}>
                  <img alt="google" src={googleIcon} />
                  <span>Google</span>
                </div>
              </a>
            </Form>
          </>
        );
      }}
    />
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onGoogle: PropTypes.func.isRequired,
  location: PropTypes.shape(PropTypes.shape()).isRequired,
};

const mapStateToProps = store => ({
  isAuth: authSelectors.getIsAuth(store),
});

const mapDispatchToProps = dispatch => ({
  onLogin: user => dispatch(authOperations.login(user)),
  onGoogle: token => dispatch(authActions.loginGoogle(token)),
});

export default withAuthRedirect(
  connect(mapStateToProps, mapDispatchToProps)(Login),
);
