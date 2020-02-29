import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// TODO: import ApiProvider and self api, ApiProvider have value and this value needs api

const moviedb = new Moviedb();

ReactDOM.render(
  // TODO: Wrap in apiProvider and ErrorBoundary
  <App />,
  document.getElementById('root'),
);
