import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ErrorBoundary from './components/ErrorBoundary';

import App from './components/App';

ReactDOM.render(
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
