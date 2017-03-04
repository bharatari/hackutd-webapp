import { handleActions } from 'redux-actions';

const initialState = {
  fetchAnnouncements: {
    requesting: false,
    announcements: null,
    error: null,
    total: null,
  },
};

export default handleActions({
  REQUEST_ANNOUNCEMENTS: (state, action) => ({
    ...state,
    fetchAnnouncements: {
      ...state.fetchAnnouncements,
      requesting: true,
      total: null,
    },
  }),
  RECEIVE_ANNOUNCEMENTS: {
    next(state, action) {
      return {
        ...state,
        fetchAnnouncements: {
          ...state.fetchAnnouncements,
          requesting: false,
          announcements: action.payload.data,
          error: null,
          total: action.payload.total,
        },
      };
    },
    throw(state, action) {
      return {
        ...state,
        fetchAnnouncements: {
          ...state.fetchAnnouncements,
          requesting: false,
          announcements: null,
          error: action.payload,
          total: null,
        },
      };
    }
  },
}, initialState);
