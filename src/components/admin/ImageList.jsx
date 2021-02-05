import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../actions/imageActions';
import { selectImages } from '../../selectors/ampheadSelectors';
import styles from './admin.css';


const ImageList = () => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchImages());
  });

  const imageElements = images.map(image => (
    <li key={image.id}>
      <img src={image.imageUrl} alt={image.name}/>
      <h1>{image.name}</h1>
      <h3>{image.caption}</h3>
    </li>
  ));
  return (
    <div className={styles.imageBox} >
      <ul>
        {imageElements}
      </ul>
      
    </div>
  );
};

export default ImageList;
