import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAnnouncement,
  fetchAnnouncements 
} from '../../actions/announcementActions';
import { selectAnnouncement } from '../../selectors/ampheadSelectors';
import styles from './admin.css';
import AnnouncementList from './AnnouncementList';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Tooltip, tooltipClasses } from '@mui/material';
import styled from '@emotion/styled';

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
  }, [depCheck]);

  const handleChange = ({ target }) => {
    if(target.name === 'side') setSide(target.value);
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  // eslint-disable-next-line max-len
  const toolTipText = 'For sentence to begin on a new line, add "<br>" to the end of the previous sentence. To add a blank line between sentences add "<br>blank_line<br>"';

  const AmpheadTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: 14,
      boxShadow: theme.shadows[1],
      maxWidth: 220
    }
  }));

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
        <AmpheadTooltip
          placement="top-start"
          arrow
          title={toolTipText}
        >
          <HelpOutlineIcon 
            className={styles.helpIcon} 
            size="large" color="secondary"
          />
        </AmpheadTooltip>
        <button className={styles.formButton}>submit</button>
      </form>
      <div className={styles.buttonBox}>
      </div>
      <AnnouncementList />
    </div>
  );
};

export default CreateAnnouncement;
