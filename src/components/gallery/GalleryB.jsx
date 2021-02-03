import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { figures } from '../../data/gallery-pictures';
import styles from './GalleryB.css';



const GalleryB = () => {

  const { side } = useParams();
  
  const galleryPics = figures.filter(figure => (
    figure.side === side) || (figure.side === 'both'));

  const galleryElements = galleryPics.map((figure, index) => (
    <li key={figure.imageUrl} >
      <Link
        to={`/gallery/detail/${figure.imageUrl}`}  >
        <img
          src={figure.imageUrl}
          alt={figure.name}
          className={styles.galleryImage}
        />
      </Link>
      <h3>{figure.caption}</h3>
    </li>
  ));

  return (
    <div className={styles[`galleryBox${side}`]} >
      <ul>
        {galleryElements}
      </ul>
    </div>
  );
};

export default GalleryB;
