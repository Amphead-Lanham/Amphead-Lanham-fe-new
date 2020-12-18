import React from 'react';
import AnnouncementList from './AnnouncementList';
import CreateAnnouncement from './CreateAnnouncement';
import styles from './admin.css';


const AdminPage = () => {
  return (
    <div className={styles.adminBox}>
      <CreateAnnouncement />
      <AnnouncementList />
    </div>
  );
};

export default AdminPage;
