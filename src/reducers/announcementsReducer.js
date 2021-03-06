import {
  SET_ANNOUNCEMENTS,
  SET_ANNOUNCEMENT,
  SET_LOADING,
  APPEND_ANNOUNCEMENT,
} from '../actions/announcementActions';
import {
  APPEND_IMAGE,
  SET_IMAGE,
  SET_IMAGES } from '../actions/imageActions';

const initialState = {
  loading: true,
  announcements: [],
  announcement: {},
  images: [],
  image: {}
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
