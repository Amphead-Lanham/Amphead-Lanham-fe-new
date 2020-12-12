import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAnnouncement } from '../../actions/announcementActions';

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
    history.push('/admin')
  }

  const handleChange = ({ target }) => {
    if(target.name === 'side') setSide(target.value);
    if(target.name === 'title') setTitle(target.value);
    if(target.name === 'body') setBody(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>add an announcement</h2>
      <label htmlFor='a-side'>Side</label>
      <select id='a-side' name='side' value={side} onChange={handleChange}>
        <option value=''>pick one</option>
        <option value='amphead'>Amphead</option>
        <option value='lanham'>Lanham</option>
      </select>
      <label htmlFor='a-title'>Title</label>
      <input
        id='a-title'
        name='title'
        value={title}
        onChange={handleChange}
      />
      <label htmlFor='a-body'>Body</label>
      <textarea
        id='a-body'
        name='body'
        value={body}
        onChange={handleChange}
      />
      <button>submit</button>
    </form>
    
  )
}

export default CreateAnnouncement
