import React from 'react';
import { useParams } from 'react-router-dom';
import { figures } from '../../data/gallery-pictures';
import styles from './Gallery.css';

const Gallery = () => {
  const { side } = useParams();

  const galleryPics = figures.filter(figure => (
    figure.side === side) || (figure.side === 'both'));

  const galleryElements = galleryPics.map(figure => (
    <li
      key={figure.imageUrl}
      className={styles.galleryItem}>
      <label htmlFor={`${figure.imageUrl}`} >
      enlarge
      </label>
      <img
        src={figure.imageUrl}
        alt={figure.name}
        className={styles.galleryPic}
      />
      <h3
        className={styles.figCaption}>
        {figure.caption}
      </h3>
      <input
        className={styles.galleryCheck}
        type={'checkbox'}
        id={`${figure.imageUrl}`}>
      </input>
      <div className={styles.container}><div></div></div>
      <div className={styles.bigPicBox}>
        <div className={styles.insideDiv} >
          <img
            src={figure.imageUrl}
            alt={figure.name}
            className={styles.bigPicture}
          />
          <label
            htmlFor={`${figure.imageUrl}`}
            className={styles.xBox} >
          X
          </label>
          <input
            className={styles.galleryCheck}
            type={'checkbox'}
            id={`${figure.imageUrl}`}></input>
        </div>
      </div>
    </li>
  ));

  return (
    <div className={styles.galleryBox} >
      <ul className={styles.galleryList} >
        {galleryElements}
      </ul>      
    </div>
  );
};

export default Gallery;
