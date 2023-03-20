export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const setNotification = notification => ({
  type: SET_NOTIFICATION,
  payload: notification
});

export const SET_SHOW_NOTIFICATION = 'SET_SHOW_NOTIFICATION';
export const setShowNotification = showNotification => ({
  type: SET_SHOW_NOTIFICATION,
  payload: showNotification 
});

export const notify = message => dispatch => {
  dispatch(setNotification(message));
};
