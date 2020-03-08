/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import * as authOperations from '../../../redux/auth/authOperations';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import styles from './Registration.module.css';

const Registration = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        acceptPolicy: false,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
        acceptPolicy: Yup.bool().oneOf([true], 'Agreement is required'),
      })}
      onSubmit={(field, { resetForm }) => {
        const user = {
          email: field.email,
          password: field.password,
        };
        onSave(user);
        resetForm({});
      }}
      render={() => {
        return (
          <>
            <Form className={styles.form}>
              <p className={styles.title}>Your Account</p>
              <div className={styles.container}>
                <label htmlFor="email">
                  E-mail<span className={styles.span}>*</span>
                </label>
                <Field
                  placeholder="your@email.com"
                  name="email"
                  type="email"
                  className={styles.input}
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
                  className={styles.input}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
                <label htmlFor="confirmPassword">
                  Password Confirmation<span className={styles.span}>*</span>
                </label>
                <Field
                  placeholder="confirmation"
                  name="confirmPassword"
                  type="password"
                  className={styles.input}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={styles.error}
                />
                <div className={styles.wrapAgree}>
                  <Field type="checkbox" name="acceptPolicy" />
                  <ErrorMessage
                    name="acceptPolicy"
                    component="div"
                    className={styles.error}
                  />
                  <button
                    className={styles.btnAgree}
                    type="button"
                    onClick={() => alert('Here must be modalka')}
                  >
                    Agreed with Privacy Policy
                  </button>
                </div>
              </div>
              <button className={styles.btn} type="submit">
                Registration
              </button>
            </Form>
          </>
        );
      }}
    />
  );
};

Registration.propTypes = {
  onSave: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSave: user => dispatch(authOperations.registration(user)),
});

export default withAuthRedirect(
  connect(null, mapDispatchToProps)(Registration),
);
