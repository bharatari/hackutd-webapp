import { createAction } from 'redux-actions';
import data from 'utils/data';

export const FETCH_ANNOUNCEMENTS = 'FETCH_ANNOUNCEMENTS';
export const fetchAnnouncements = createAction(FETCH_ANNOUNCEMENTS);
export const requestAnnouncements = createAction('REQUEST_ANNOUNCEMENTS');
export const receiveAnnouncements = createAction('RECEIVE_ANNOUNCEMENTS');
