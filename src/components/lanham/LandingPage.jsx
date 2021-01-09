import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInterval } from '../../hooks/hooks';
import { selectAnnouncements } from '../../selectors/ampheadSelectors';
import { fetchAnnouncements } from '../../actions/announcementActions';
import lanhamLogoGreen from '../../assets/lanham-logo-green.png';
import styles from './LandingPage.css';
import { models } from '../../data/models.js';


const LandingPage = () => {
  const [modelIndex, setModelIndex] = useState(0);
  const dispatch = useDispatch();
  const announcements = useSelector(selectAnnouncements);
  const displayModel = models[modelIndex];

  
  useInterval(() => { 
    if(modelIndex > models.length - 2) setModelIndex(0); 
    else setModelIndex(modelIndex => modelIndex + 1); 
    
  }, 7000);
  
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
        <div className={styles.logoBox}>
          <img src={lanhamLogoGreen} className={styles.logoGreen} />
          <div className={styles.headerBox} >
            <h1 className={styles.headerA} >Custom Guitar Amps</h1>
            <h1 className={styles.headerB} >Hand Built in Portland, OR.</h1>
          </div>
        </div>
        <div className={styles.announcementBox}>
          <ul className={styles.announcementList}>
            {announcementElements}
          </ul>
        </div>
      </div>
      <div className={styles[displayModel.modelStyleCode]}>
        <h1 className={styles.displayModel} >{displayModel.name}</h1>
        <img className={styles.modelPic} src={displayModel.photoUrl}/>
      </div>
    </div>
  );
};

export default LandingPage;
