import React, { useEffect } from 'react';
import CreateAnnouncement from './CreateAnnouncement';
import styles from './admin.css';
// import CreateImage from './CreateImage';
import { Link } from 'react-router-dom';
import Notification from '../amphead/Notification';
import { useDispatch } from 'react-redux';
import { useCurrentUser } from '../../context/AuthContext';
import { setNotification } from '../../actions/notificationActions';



const AdminPage = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();

  useEffect(() => {
    if(user) {
      dispatch(setNotification({ 
        type: 'success', 
        message: `Welcome Back ${user.firstName}` 
      }));
    }
  }, [user]);

  return (
    <div className={styles.adminBox}>
      <div className={styles.adminHeader} >
        <button onClick={() => window.scrollTo(0, 0)}>Back to top</button>
        <Link className={styles.adminLink} to={'/'}>
          <button className={styles.formButton}>Amphead home</button>
        </Link>
        <Link to={'/lanham'}>
          <button className={styles.formButton}>Lanham home</button>
        </Link>
      </div>
      <CreateAnnouncement />
      {/* <CreateImage /> */}
      <Notification/>
    </div>
  );
};

export default AdminPage;
