import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { createAnnouncement } from '../../actions/announcementActions';
import styles from './admin.css';

const CreateAnnouncement = () => {
  const [side, setSide] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();


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
    history.push('/admin');
  };

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
      <Link to={'/'}>
        <button className={styles.formButton}>Amphead home</button>
      </Link>
      <button className={styles.formButton}>Lanham home</button>
    </div>
  );
};

export default CreateAnnouncement;
