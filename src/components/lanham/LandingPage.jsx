import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnnouncements } from '../../selectors/ampheadSelectors';
import { fetchAnnouncements } from '../../actions/announcementActions';
import lanhamLogo from
  '../../../public/assets/lanham-logo-white-highlight.png';
import styles from './LandingPage.css';


const LandingPage = () => {
  const dispatch = useDispatch();
  const announcements = useSelector(selectAnnouncements);
  
  useEffect(() => {
    dispatch(fetchAnnouncements());
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
        <div className={styles.topBoxNext}>
          <div className={styles.logoBox}>
            <img src={lanhamLogo} className={styles.logo} />
            <div className={styles.headerBox} >
              <h1 className={styles.headerA} >Custom Guitar Amps</h1>
              <h1 className={styles.headerB} >Hand Built in Portland, OR.</h1>
            </div>
          </div>
          <div className={styles.infoBox} >
            <p>
              {'Let\'s talk amps! Use the contact form or call'}
              <br/>
              <a href={'tel:5032314035'}>{'503 231-4035'}</a>
            </p>
          </div>
        </div>
        <div className={styles.announcementBox}>
          <ul className={styles.announcementList}>
            {announcementElements}
          </ul>
        </div>
     
      </div>
      
    </div>
  );
};

export default LandingPage;
