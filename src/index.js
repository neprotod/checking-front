import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ErrorBoundary from './components/ErrorBoundary';
// import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

// TODO: import ApiProvider and self api, ApiProvider have value and this value needs api
// const moviedb = new Moviedb();

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
