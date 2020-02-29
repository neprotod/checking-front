import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './components/ErrorBoundary';

import App from './components/App';

// TODO: import ApiProvider and self api, ApiProvider have value and this value needs api

ReactDOM.render(
  // TODO: Wrap in apiProvider and ErrorBoundary
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root'),
);
