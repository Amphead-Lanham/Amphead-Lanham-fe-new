import React from 'react';
import CreateAnnouncement from './CreateAnnouncement';
import styles from './admin.css';
import CreateImage from './CreateImage';
import { Link } from 'react-router-dom';



const AdminPage = () => {
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
      <CreateImage />
    </div>
  );
};

export default AdminPage;
