import { createAction } from 'redux-actions';
import data from 'utils/data';

export const requestEvents = createAction('REQUEST_EVENTS');
export const receiveEvents = createAction('RECEIVE_EVENTS');
export const fetchEvents = createAction('FETCH_EVENTS');

export const requestEvent = createAction('REQUEST_EVENT');
export const receiveEvent = createAction('RECEIVE_EVENT');
export const fetchEvent = createAction('FETCH_EVENT');
