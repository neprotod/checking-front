import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ErrorBoundary from './components/ErrorBoundary';

import App from './components/App';

// TODO: import ApiProvider and self api, ApiProvider have value and this value needs api

ReactDOM.render(
  // TODO: Wrap in apiProvider and ErrorBoundary
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </PersistGate>
  </Provider>,

  document.getElementById('root'),
);
