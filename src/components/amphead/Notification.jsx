import React, { useEffect } from 'react';
import styles from './Notification.css';
import {
  Snackbar,
  Alert
} from '@mui/material';
import { 
  useSelector,
  useDispatch
} from 'react-redux';
import { 
  selectNotification,
  selectShowNotification,
} from '../../selectors/ampheadSelectors';
import { setShowNotification } from '../../actions/notificationActions';

export default function Notification() {
  const dispatch = useDispatch();
  const notification = useSelector(selectNotification);
  const showNotification = useSelector(selectShowNotification);

  useEffect(() => {
    if(notification) {
      dispatch(setShowNotification(true));
      setTimeout(() => {
        dispatch(setShowNotification(false));
      }, 5000);
    }
  }, [notification]);

  const handleCloseNotifications = () => {
    dispatch(setShowNotification(false));
  };

  return (
    <div className={styles.notificationBox}>
      {showNotification &&
        <Snackbar
          open={showNotification}
          autoHideDuration={5000}
          onClose={handleCloseNotifications}
        >
          <Alert
            elevation={6}
            variant="filled"
            severity={notification.type}
            sx={{ width: '100%' }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      }
    </div>
  );
}
