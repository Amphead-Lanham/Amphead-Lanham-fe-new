import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchImage } from '../../actions/imageActions';
import { selectImage, selectLoading } from '../../selectors/ampheadSelectors';
import styles from './GalleryB.css';


const GalleryDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const image = useSelector(selectImage);
  
  useEffect(() => {
    dispatch(fetchImage(id));
  }, []);

  // const routeBack = (image) => {
  //   if(image.side === 'amphead') return ''
  // }

  if(loading) return (<h1>...Loading</h1>);

  return (
    <div className={styles[image.side]} >
      <div>
        <Link
          to={`/gallery/${image.side}`}
          className={styles.X}>X</Link>
        <img
          src={image.imageUrl}
          alt={image.name}
        />
      </div>
    </div>
  );
};

export default GalleryDetail;
