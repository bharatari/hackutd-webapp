import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import makeRootReducer from 'modules/';
import rootSaga from 'modules/sagas';

export default (initialState = {}, history) => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [];

  if (__DEV__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  sagaMiddleware.run(rootSaga);

  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('../modules/index', () => {
      const reducers = require('../modules/index').default;
      store.replaceReducer(reducers);
    });
  }

  return store;
}
