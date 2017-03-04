import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form';
import announcement from './announcement/reducer';
import event from './event/reducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    routing,
    form,
    announcement,
    event,
    ...asyncReducers,
  });
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer;
