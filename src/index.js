import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./reducers";
import saga from "./sagas";
import registerServiceWorker from "./registerServiceWorker";

export const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(saga);

  return store;
};

const store = configureStore();

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
registerServiceWorker();
