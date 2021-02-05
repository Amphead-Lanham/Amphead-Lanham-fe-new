import React from 'react';
import AnnouncementList from './AnnouncementList';
import CreateAnnouncement from './CreateAnnouncement';
import styles from './admin.css';
import CreateImage from './CreateImage';



const AdminPage = () => {
  return (
    <div className={styles.adminBox}>
      <CreateAnnouncement />
      
      <CreateImage />
    </div>
  );
};

export default AdminPage;
