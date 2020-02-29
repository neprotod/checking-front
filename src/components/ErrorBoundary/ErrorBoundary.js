import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundaryItem from '../ErrorBoundaryItem';

export default class ErrorBoundary extends React.Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo); // Change console
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorBoundaryItem /> : children;
  }
}
