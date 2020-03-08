/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import * as authOperations from '../../../redux/auth/authOperations';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import ModalWindow from '../../../components/ModalWindow/ModalWindow';

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
      render={({ errors, touched }) => {
        return (
          <Form>
            <p>Your Account</p>
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                className={`form-control${
                  errors.confirmPassword && touched.confirmPassword
                    ? ' is-invalid'
                    : ''
                }`}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="invalid-feedback"
              />
              <Field
                type="checkbox"
                name="acceptPolicy"
                className={`form-check-input ${
                  errors.acceptPolicy && touched.acceptPolicy
                    ? ' is-invalid'
                    : ''
                }`}
              />
              <ErrorMessage
                name="acceptPolicy"
                component="div"
                className="invalid-feedback"
              />
              <ModalWindow />
            </div>
            <button type="submit">Registration</button>
          </Form>
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
