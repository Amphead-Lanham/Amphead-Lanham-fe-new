import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchImages, removeImage } from '../../actions/imageActions';
import { selectImages } from '../../selectors/ampheadSelectors';
import styles from './admin.css';


const ImageList = () => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  const handleDelete = ({ target }) => {
    confirm('are you sure you wish to delete this image?') ?
      dispatch(removeImage(target.value))
      : console.log('deletion cancelled');
  };
  

  const imageElements = images.map(image => (
    <li key={image.id}>
      <img src={image.imageUrl} alt={image.name}/>
      <h1>{image.name}</h1>
      <h3>{image.caption 
        ? `caption: ${image.caption}`  
        : null}
      </h3>
      <h4>{`gallery: ${image.side}`}</h4>
      <nav>
        <Link to={`/admin/update/${image.id}`}>
          <button>update</button>
        </Link>
        <button value={image.id} onClick={handleDelete}>delete</button>
      </nav>
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
