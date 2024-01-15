import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchAnnouncements,
  removeAnnouncement
} from '../../actions/announcementActions';
import { 
  selectAnnouncements,
} from '../../selectors/ampheadSelectors';
import styles from './admin.css';
import AnnouncementBody from './AnnouncementBody';
import { Button } from '@mui/material';


const AnnouncementList = () => {
  const announcements = useSelector(selectAnnouncements);
  const dispatch = useDispatch();

  const depCheck = JSON.stringify(announcements);

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [depCheck]);

  const handleDelete = ({ target }) => {
    confirm(
      'are you sure yoou wish to delete this announcement?'
    ) ?
      dispatch(removeAnnouncement(target.value))
      : console.log('deletion cancelled');
  
  };

  const announcementElements = announcements.map(announcement => {
    return (
      <li key={announcement.id} className={styles.listItem}>
        <p>{announcement.side} announcement</p>
        <p className={styles.announcementTitle}>{announcement.title}</p>
        <div className={styles.aBody}>
          <AnnouncementBody bodyString={announcement.body}/>
        </div>
        <div className={styles.aButtonsBox}>
          <Link to={`/admin/update/${announcement.id}`}>
            {/* <button>update</button> */}
            <Button 
              variant="contained"
              color="primary"
              sx={{
                color: '#000'
              }}  
            >
            Update
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDelete}
            value={announcement.id}
            sx={{
              color: '#000'
            }}
          >
          Delete
          </Button>
        </div>
        {/* 
        <button value={announcement.id} onClick={handleDelete}>delete</button> 
        */}
      </li>);
  });

  return (
    <ul className={styles.listBox} >
      {announcementElements}
    </ul>
  );
};

export default AnnouncementList;
