import React from 'react';
import { useParams } from 'react-router-dom';
import { figures } from '../../data/gallery-pictures';
import styles from './GalleryB.css';


const GalleryDetail = () => {
  const { imageUrl } = useParams();

  const selectedImage = figures.find(figure => figure.imageUrl === imageUrl);

  return (
    <div className={styles[selectedImage.side]} >
      <div>
        <img
          src={selectedImage.imageUrl}
          alt={selectedImage.name}
        />
      </div>
    </div>
  );
};

export default GalleryDetail;
