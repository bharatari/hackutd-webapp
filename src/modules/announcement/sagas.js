import data from 'utils/data';
import { put, take, call, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';

export function* fetchAnnouncements() {
  yield put(actions.requestAnnouncements());

  try {
    const response = yield call(data.request.bind(data), 'announcements', 'get');

    yield put(actions.receiveAnnouncements(response));
  } catch (e) {
    yield put(actions.receiveAnnouncements(e));
  }
}

export function* watchFetchAnnouncements() {
  yield takeLatest(actions.FETCH_ANNOUNCEMENTS, fetchAnnouncements);
}
