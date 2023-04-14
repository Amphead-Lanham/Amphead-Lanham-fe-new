import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchAnnouncements,
  removeAnnouncement
} from '../../actions/announcementActions';
import { 
  selectAnnouncements,
  selectLoading,
} from '../../selectors/ampheadSelectors';
import styles from './admin.css';


const AnnouncementList = () => {
  const announcements = useSelector(selectAnnouncements);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const depCheck = JSON.stringify(announcements);

  useEffect(() => {
    console.log('in list => ', announcements.length);
    dispatch(fetchAnnouncements());
  }, [depCheck]);

  const handleDelete = ({ target }) => {
    confirm(
      'are you sure yoou wish to delete this announcement?'
    ) ?
      dispatch(removeAnnouncement(target.value))
      : console.log('deletion cancelled');
  
  };

  const announcementElements = announcements.map(announcement => (
    <li key={announcement.id} className={styles.listItem}>
      <p>{announcement.side} announcement</p>
      <p className={styles.announcementTitle}>{announcement.title}</p>
      <p>{announcement.body}</p>
      <Link to={`/admin/update/${announcement.id}`}>
        <button>update</button>
      </Link>
      <button value={announcement.id} onClick={handleDelete}>delete</button>
    </li>
  ));

  return (
    <ul className={styles.listBox} >
      {announcementElements}
    </ul>
  );
};

export default AnnouncementList;
