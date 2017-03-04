import { createAction } from 'redux-actions';
import data from 'utils/data';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const fetchEvents = createAction(FETCH_EVENTS);
export const requestEvents = createAction('REQUEST_EVENTS');
export const receiveEvents = createAction('RECEIVE_EVENTS');

export const FETCH_EVENT = 'FETCH_EVENT';
export const fetchEvent = createAction(FETCH_EVENT);
export const requestEvent = createAction('REQUEST_EVENT');
export const receiveEvent = createAction('RECEIVE_EVENT');
