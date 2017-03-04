import { handleActions } from 'redux-actions';
import _ from 'lodash';

const initialState = {
  fetchAnnouncements: {
    requesting: false,
    announcements: null,
    error: null,
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
          announcements: _.reverse(action.payload),
          error: null,
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
        },
      };
    }
  },
}, initialState);
