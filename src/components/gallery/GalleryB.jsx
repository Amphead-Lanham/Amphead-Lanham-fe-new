import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchImages } from '../../actions/imageActions';
import { selectImages, selectLoading } from '../../selectors/ampheadSelectors';
import styles from './GalleryB.css';



const GalleryB = () => {
  const dispatch = useDispatch();
  const { side } = useParams();
  const images = useSelector(selectImages);
  const loading = useSelector(selectLoading);
  
  useEffect(() => {
    dispatch(fetchImages());
    
  }, []);
  
  const galleryElements = (!loading) ? images.filter(image => (
    image.side === side) || (image.side === 'both')).map((image) => (
    <li key={image.imageUrl} >
      <Link
        to={`/gallery/detail/${image.id}`}  >
        <img
          src={image.imageUrl}
          alt={image.name}
          className={styles.galleryImage}
        />
      </Link>
      <h3>{image.caption}</h3>
    </li>
  ))
    : <h1>...Loading</h1>;
   

  return (
    <div className={styles[`galleryBox${side}`]} >
      <div><Link
        to={side === 'amphead' ? '/' : '/lanham'}
        className={styles.link}
      >Home
      </Link>
      </div>
      <ul>
        {galleryElements}
      </ul>
    </div>
  );
};

export default GalleryB;
