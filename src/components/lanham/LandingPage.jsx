import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnnouncements } from '../../selectors/ampheadSelectors';
import { fetchAnnouncements } from '../../actions/announcementActions';
import lanhamLogoGreen from '../../../public/assets/lanham-logo-green.png';
import styles from './LandingPage.css';
import { fetchImages } from '../../actions/imageActions';



const LandingPage = () => {
  const dispatch = useDispatch();
  const announcements = useSelector(selectAnnouncements);
  
  useEffect(() => {
    dispatch(fetchAnnouncements());
    dispatch(fetchImages());
  }, []);

  const announcementElements = announcements.filter(announcement => (
    announcement.side === 'lanham')).map(announcement => (
    <li key={announcement.id} className={styles.announcement} >
      <h2>{announcement.title}</h2>
      <p>{announcement.body}</p>
    </li>
  ));

  return (
    <div className={styles.landingBox} >
      <div className={styles.topBox}>
        <div className={styles.logoBox}>
          <img src={lanhamLogoGreen} className={styles.logoGreen} />
          <div className={styles.headerBox} >
            <h1 className={styles.headerA} >Custom Guitar Amps</h1>
            <h1 className={styles.headerB} >Hand Built in Portland, OR.</h1>
          </div>
        </div>
        { announcements.filter(announcement => (
          announcement.side === 'lanham')) &&
        <div className={styles.announcementBox}>
          <ul className={styles.announcementList}>
            {announcementElements}
          </ul>
        </div>
        }
      </div>
    </div>
  );
};

export default LandingPage;
