/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import * as authOperations from '../../../redux/auth/authOperations';
import withAuthRedirect from '../../../hoc/withAuthRedirect';

const Login = ({ onLogin }) => {
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
      render={({ errors, touched }) => {
        return (
          <Form>
            <p>Take control of your life.</p>
            <p>Just check in.</p>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                className={`form-control${
                  errors.email && touched.email ? ' is-invalid' : ''
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={`form-control${
                  errors.password && touched.password ? ' is-invalid' : ''
                }`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <button type="submit">Log in</button>
          </Form>
        );
      }}
    />
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onLogin: user => dispatch(authOperations.login(user)),
});

export default withAuthRedirect(connect(null, mapDispatchToProps)(Login));
