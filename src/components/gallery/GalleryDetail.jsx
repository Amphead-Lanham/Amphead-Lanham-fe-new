import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchImage } from '../../actions/imageActions';
import { selectImage, selectLoading } from '../../selectors/ampheadSelectors';
import styles from './GalleryB.css';


const GalleryDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const image = useSelector(selectImage);
  const history = useHistory();
  
  useEffect(() => {
    dispatch(fetchImage(id));
  }, []);

  if(loading) return (<h1>...Loading</h1>);

  return (
    <div className={styles[image.side]} >
      <div>
        <p
          onClick={() => history.goBack()}
          className={styles.X}
        >X
        </p>
        <img
          src={image.imageUrl}
          alt={image.name}
        />
      </div>
    </div>
  );
};

export default GalleryDetail;
