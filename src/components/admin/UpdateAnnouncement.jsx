import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  changeAnnouncement,
  fetchAnnouncement
} from '../../actions/announcementActions';
import { selectAnnouncement } from '../../selectors/ampheadSelectors';

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
    <div>
      <h2>update announcement</h2>
      <h3>side:</h3>
      <h2>{announcement.side}</h2>
      <h3>title:</h3>
      <h2>{announcement.title}</h2>
      <h3>body:</h3>
      <h2>{announcement.body}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="a-side">Side</label>
        <select id="a-side" name="side" value={side} onChange={handleChange}>
          <option value="amphead">Amphead</option>
          <option value="lanham">Lanham</option>
        </select>
        <label htmlFor="a-title">Title</label>
        <input
          placeholder={announcement.title}
          id="a-title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="a-body">Body</label>
        <textarea
          placeholder={announcement.body}
          id="a-body"
          name="body"
          value={body}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default UpdateAnnouncement;
