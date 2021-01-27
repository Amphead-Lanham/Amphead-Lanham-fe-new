/* eslint-disable max-len */
import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnnouncements } from '../../actions/announcementActions';
import { selectAnnouncements } from '../../selectors/ampheadSelectors';
import PopUp from '../contact/PopUp';
import BigLogo from './BigLogo';
import styles from './News.css';

const News = () => {
  const announcements = useSelector(selectAnnouncements);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, []);

  const announcementElements = announcements.filter(announcement => (
    announcement.side === 'amphead')).map(announcement => (
    <li key={announcement.id} className={styles.announcement} >
      <h2>{announcement.title}</h2>
      <p>{announcement.body}</p>
    </li>
  ));

  return (
    <div className={styles.bigBox}>
      <div className={styles.logo}>
        <BigLogo />
      </div>
      <div className={styles.infoBox}>
        <h1 className={styles.headline}>
        Providing repair, maintenance and customization for electric guitars and amplifiers and custom built tube amps for Pacific Northwest players since 1996. 
        </h1>
        <h3>The shop hours are by appointment.
            Monday through Friday 10 AM till 6 PM and Saturday 10 AM till 2 PM</h3>
        <div className={styles.formLine}>
          <h3>Please use the</h3>
          <PopUp side={'amphead'}/>
        </div>
        <h3>or call 503 231-4035 to talk about scheduling work. </h3>
      </div>
      <ul className={styles.announcementBox} >
        {announcementElements}
      </ul>
    </div>
  );
};

export default News;
