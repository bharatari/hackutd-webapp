import data from 'utils/data';
import { put, take, call, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';

export function* fetchEvents() {
  yield put(actions.requestEvents());

  try {
    const response = yield call(data.request.bind(data), 'events', 'get');

    yield put(actions.receiveEvents(response));
  } catch (e) {
    yield put(actions.receiveEvents(e));
  }
}

export function* fetchEvent(id) {
  yield put(requestEvent());

  try {
    const response = yield call(data.request.bind(data), 'events', 'get', id);

    yield put(actions.receiveEvent(response));
  } catch (e) {
    yield put(actions.receiveEvent(e));
  }
}

export function* watchFetchEvents() {
  yield takeLatest(actions.FETCH_EVENTS, fetchEvents);
}

export function* watchFetchEvent() {
  yield takeLatest(actions.FETCH_EVENT, fetchEvent);
}
