import {
  getAnnouncements,
  getAnnouncementById,
  deleteAnnouncement,
  postAnnouncement,
  updateAnnouncement
} from '../services/amphead-api';

export const SET_ANNOUNCEMENTS = 'SET_ANNOUNCEMENTS';

export const setAnnouncements = announcements => ({
  type: SET_ANNOUNCEMENTS,
  payload: announcements
});

export const SET_ANNOUNCEMENT = 'SET_ANNOUNCEMENT';
export const setAnnouncement = announcement => ({
  type: SET_ANNOUNCEMENT,
  payload: announcement
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});

export const APPEND_ANNOUNCEMENT = 'APPEND_ANNOUNCEMENT';
export const appendAnnouncement = announcement => ({
  type: APPEND_ANNOUNCEMENT,
  payload: announcement
});

export const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT';

export const fetchAnnouncements = () => dispatch => {
  getAnnouncements()
    .then(announcements => {
      dispatch(setAnnouncements(announcements));
    })
    .finally(() => dispatch(setLoading(false)));
};

export const fetchAnnouncement = id => dispatch => {
  getAnnouncementById(id)
    .then(announcement => {
      dispatch(setAnnouncement(announcement));
    })
    .finally(() => dispatch(setLoading(false)));
};

export const removeAnnouncement = id => dispatch => {
  deleteAnnouncement(id)
    .then(announcement => {
      dispatch({
        type: DELETE_ANNOUNCEMENT,
        payload: announcement.id
      });
    });
};

export const createAnnouncement = announcement => dispatch => {
  postAnnouncement(announcement)
    .then(createdAnnouncement => {
      dispatch(appendAnnouncement(createdAnnouncement));
    
    });
};

export const changeAnnouncement = (id, announcement) => dispatch => {
  updateAnnouncement(id, announcement)
    .then(updatedAnnouncement => {
      dispatch(appendAnnouncement(updatedAnnouncement));
    });
    
};
