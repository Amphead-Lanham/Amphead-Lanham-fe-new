import React from 'react';
import AnnouncementList from './AnnouncementList';
import CreateAnnouncement from './CreateAnnouncement';

const AdminPage = () => {
  return (
    <div>
      <AnnouncementList />
      <CreateAnnouncement />
    </div>
  )
}

export default AdminPage
