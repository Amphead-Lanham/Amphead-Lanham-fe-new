import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  fetchAnnouncements,
  removeAnnouncement
} from '../../actions/announcementActions';
import { selectAnnouncements } from '../../selectors/ampheadSelectors';
import styles from './admin.css';


const AnnouncementList = () => {
  const announcements = useSelector(selectAnnouncements);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, []);

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [announcements]);

  const handleDelete = ({ target }) => {
    dispatch(removeAnnouncement(target.value));
    dispatch(fetchAnnouncements());
    history.replaceState();
  };

  const announcementElements = announcements.map(announcement => (
    <li key={announcement.id} className={styles.listItem}>
      <p>{announcement.side} announcement</p>
      <p>{announcement.title}</p>
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
