import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createImage } from '../../actions/imageActions';
import styles from './admin.css';

const CreateImage = () => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [side, setSide] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createImage({
      name,
      imageUrl,
      caption,
      side
    }));
    setSide('');
    setImageUrl('');
    setCaption('');
    setSide('');

  };

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'imageUrl') setImageUrl(target.value);
    if(target.name === 'caption') setCaption(imageUrl);
    if(target.name === 'side') setSide(target.value);
  };
  return (
    <div className={styles.createImageBox} >
      <h2>add an image</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={'i-name'}>Name</label>
        <input
          id={'i-name'}
          name={'name'}
          value={name}
          onChange={handleChange}
        />
        <label htmlFor={'i-image'}>Image URL</label>
        <input
          id={'i-image'}
          name={'image'}
          value={imageUrl}
          onChange={handleChange}
        />
        <label htmlFor={'i-caption'}>Caption</label>
        <input
          id={'i-caption'}
          name={'caption'}
          value={caption}
          onChange={handleChange}
        />
        <label htmlFor={'i-side'}>Side</label>
        <select
          id={'i-side'}
          name={'side'}
          value={side}
          onChange={handleChange}
        >
          <option value={''}>Pick one</option>
          <option value={'amphead'}>Amphead</option>
          <option value={'lanham'}>Lanham</option>
        </select>
      </form>
      
    </div>
  );
};

export default CreateImage;
