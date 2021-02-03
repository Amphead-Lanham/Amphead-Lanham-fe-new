import {
  SET_ANNOUNCEMENTS,
  SET_ANNOUNCEMENT,
  SET_LOADING,
  APPEND_ANNOUNCEMENT,
} from '../actions/announcementActions';

const initialState = {
  loading: true,
  announcements: [],
  announcement: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.payload
      };
    case SET_ANNOUNCEMENT:
      return {
        ...state,
        announcement: action.payload
      };
    case APPEND_ANNOUNCEMENT:
      return {
        ...state,
        announcement: action.payload
      };
    case SET_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    case SET_IMAGES:
      return {
        ...state,
        images: action.payload
      };
    case APPEND_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    default:
      return state;

  }
}
