import React from 'react';
import { useParams } from 'react-router-dom';
import { figures } from '../../data/gallery-pictures';
import styles from './GalleryB.css';



const GalleryB = () => {

  const { side } = useParams();
  
  const galleryPics = figures.filter(figure => (
    figure.side === side) || (figure.side === 'both'));

  const galleryElements = galleryPics.map(figure => (
    <li key={figure.imageUrl} >
      <img src={figure.imageUrl} alt={figure.name}/>
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
