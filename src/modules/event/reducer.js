import { handleActions } from 'redux-actions';

const initialState = {
  fetchEvents: {
    requesting: false,
    events: null,
    error: null,
    total: null,
  },
  fetchEvent: {
    requesting: false,
    event: null,
    error: null,
  },
};

export default handleActions({
  REQUEST_EVENTS: (state, action) => ({
    ...state,
    fetchEvents: {
      ...state.fetchEvents,
      requesting: true,
      total: null,
    },
  }),
  RECEIVE_EVENTS: {
    next(state, action) {
      return {
        ...state,
        fetchEvents: {
          ...state.fetchEvents,
          requesting: false,
          events: action.payload.data,
          error: null,
          total: action.payload.total,
        },
      };
    },
    throw(state, action) {
      return {
        ...state,
        fetchEvents: {
          ...state.fetchEvents,
          requesting: false,
          events: null,
          error: action.payload,
          total: null,
        },
      };
    }
  },
  REQUEST_EVENT: (state, action) => ({
    ...state,
    fetchEvent: {
      ...state.fetchEvent,
      requesting: true,
      event: null,
      error: null,
    },
  }),
  RECEIVE_EVENT: {
    next(state, action) {
      return {
        ...state,
        fetchEvent: {
          ...state.fetchEvent,
          requesting: false,
          event: action.payload,
          error: null,
        },
      };
    },
    throw(state, action) {
      return {
        ...state,
        fetchEvent: {
          ...state.fetchEvent,
          requesting: false,
          event: null,
          error: action.payload,
        },
      };
    }
  },
}, initialState);
