import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  changeAnnouncement,
  fetchAnnouncement
} from '../../actions/announcementActions';
import { selectAnnouncement } from '../../selectors/ampheadSelectors';
import styles from './admin.css';

const UpdateAnnouncement = () => {
  const announcement = useSelector(selectAnnouncement);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAnnouncement(id));
  }, []);

  const [side, setSide] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const handleChange = ({ target }) => {
    if(target.name === 'side') setSide(target.value);
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeAnnouncement(id, {
      side,
      title,
      body
    }));
    setSide('');
    setTitle('');
    setBody('');
  };
 
  return (
    <div className={styles.updateBox} >
      <h2 className={styles.updateHeadline} >update announcement</h2>
      <h3 className={styles.updateCategory} >side:</h3>
      <h2 className={styles.updateHeadline} >{announcement.side}</h2>
      <h3 className={styles.updateCategory} >title:</h3>
      <h2 className={styles.updateHeadline} >{announcement.title}</h2>
      <h3 className={styles.updateCategory} >body:</h3>
      <h2 className={styles.updateHeadline} >{announcement.body}</h2>
      <form onSubmit={handleSubmit} className={styles.updateForm} >
        <label htmlFor="a-side" className={styles.formLabel} >Side</label>
        <select
          id="a-side"
          name="side"
          value={side}
          onChange={handleChange}
          className={styles.formEl} >
          <option value="">pick one</option>
          <option value="amphead">Amphead</option>
          <option value="lanham">Lanham</option>
        </select>
        <label htmlFor="a-title" className={styles.formLabel} >Title</label>
        <input
          placeholder={announcement.title}
          id="a-title"
          name="title"
          value={title}
          onChange={handleChange}
          className={styles.formEl}
        />
        <label htmlFor="a-body" className={styles.formLabel} >Body</label>
        <textarea
          placeholder={announcement.body}
          id="a-body"
          name="body"
          value={body}
          onChange={handleChange}
          className={styles.formEl}
        />
        <button className={styles.formEl} >submit</button>
      </form>
      <Link to={'/admin'}>
        <button className={styles.formEl} >admin home</button>
      </Link>
    </div>
  );
};

export default UpdateAnnouncement;
