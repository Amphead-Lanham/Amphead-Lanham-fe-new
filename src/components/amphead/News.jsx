import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnnouncements } from '../../actions/announcementActions';
import { selectAnnouncements } from '../../selectors/ampheadSelectors';

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
          Providing Amplifier Repair and Maintenance to Portland
           Area Musicians since 1996
        </h1>
        <h3>503 231-4035</h3>
        <h3>5225-a SE 78th ave. Portland, OR 97206</h3>
      </div>
      <ul className={styles.announcementBox} >
        {announcementElements}
      </ul>
    </div>
  );
};

export default News;
