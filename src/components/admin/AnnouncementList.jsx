/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAnnouncements, removeAnnouncement } from '../../actions/announcementActions';
import { selectAnnouncements } from '../../selectors/ampheadSelectors';


const AnnouncementList = () => {
  const announcements = useSelector(selectAnnouncements);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, []);

  const handleDelete = ({ target }) => {
    dispatch(removeAnnouncement(target.value));
    dispatch(fetchAnnouncements());
    
  }

  const announcementElements = announcements.map(announcement => (
    <li key={announcement.id}>
    <p>{announcement.side} announcement</p>
    <p>{announcement.title}</p>
    <p>{announcement.body}</p>
    <Link to={`/admin/update/${announcement.id}`}>
    <button>update</button>
    </Link>
    <button value={announcement.id} onClick={handleDelete}>delete</button>
    </li>
  ))

  return (
    <ul>
      {announcementElements}
    </ul>
  )
}

export default AnnouncementList
