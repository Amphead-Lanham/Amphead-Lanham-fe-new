import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAnnouncement,
  fetchAnnouncements 
} from '../../actions/announcementActions';
import { selectAnnouncement } from '../../selectors/ampheadSelectors';
import styles from './admin.css';
import AnnouncementList from './AnnouncementList';

const CreateAnnouncement = () => {
  const [side, setSide] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const announcements = useSelector(selectAnnouncement);

  const depCheck = JSON.stringify(announcements);
  


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createAnnouncement({
      side,
      title,
      body
    }));
    setSide('');
    setTitle('');
    setBody('');
    
  };
  
  useEffect(() => {
    (dispatch(fetchAnnouncements()));
  }, []);


  useEffect(() => {
    dispatch(fetchAnnouncements());
    console.log('in create => ', announcements);
  }, [depCheck]);

  const handleChange = ({ target }) => {
    if(target.name === 'side') setSide(target.value);
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  return (
    <div className={styles.createBox}>
      <h2>add an announcement</h2>
      <form onSubmit={handleSubmit} className={styles.createForm} >
        <label htmlFor="a-side" className={styles.formLabel} >Side</label>
        <select
          id="a-side"
          name="side"
          value={side}
          onChange={handleChange}
          className={styles.formEl}>
          <option value="">pick one</option>
          <option value="amphead">Amphead</option>
          <option value="lanham">Lanham</option>
        </select>
        <label htmlFor="a-title" className={styles.formLabel} >Title</label>
        <input
          id="a-title"
          name="title"
          value={title}
          onChange={handleChange}
          className={styles.formEl}
        />
        <label htmlFor="a-body" className={styles.formLabel} >Body</label>
        <textarea
          id="a-body"
          name="body"
          value={body}
          onChange={handleChange}
          className={styles.formText}
        />
        <button className={styles.formButton}>submit</button>
      </form>
      <div className={styles.buttonBox}>
      </div>
      <AnnouncementList />
    </div>
  );
};

export default CreateAnnouncement;
