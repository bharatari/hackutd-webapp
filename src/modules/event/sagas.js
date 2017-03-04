import data from 'utils/data';
import { put, take, call } from 'redux-saga/effects';
import * as actions from './actions';

export function* fetchEvents() {
  yield put(actions.requestEvents());

  try {
    const response = yield call(data.request, 'events', 'get');

    yield put(actions.receiveEvents(response));
  } catch (e) {
    yield put(actions.receiveEvents(e));
  }
}

export function* fetchEvent(id) {
  yield put(requestEvent());

  try {
    const response = yield call(data.request, 'events', 'get', id);

    yield put(actions.receiveEvent(response));
  } catch (e) {
    yield put(actions.receiveEvent(e));
  }
}

export function* watchFetchEvents() {
  yield takeEvery('FETCH_EVENTS', fetchEvents);
}
