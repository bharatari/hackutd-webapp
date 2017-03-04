import { createAction } from 'redux-actions';
import data from 'utils/data';

export const requestAnnouncements = createAction('REQUEST_ANNOUNCEMENTS');
export const receiveAnnouncements = createAction('RECEIVE_ANNOUNCEMENTS');

export function* fetchAnnouncements() {
  yield put(requestAnnouncements());

  data.request('announcements', 'get', null, query)
    .then(function (response) {
      yield put(receiveAnnouncements(response));
    }).catch(function (e) {
      yield put(receiveAnnouncements(e));
    });
}
