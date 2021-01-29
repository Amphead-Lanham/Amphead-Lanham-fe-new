import React from 'react';
import styles from './ModelDetail.css';
import { useParams } from 'react-router-dom';
import { models } from '../../data/models';

const ModelDetail = () => {
  const { model } = useParams();
  const namedModel = models.find(amp => (amp.name === model));
 
  const listItems = namedModel.features.map((feature, index) => (
    <li  key={feature[index]}>
      {feature}
    </li>
  ));

  const pictures = namedModel.otherPhotos.map((photo, index) => (
    <li key={index} >
      <img
        src={photo}
        alt={photo}
        className={styles.otherPics}
      />
    </li>
  ));

  return (
    <div className={styles[model]}>
      <h1>{namedModel.name}</h1>
      <img
        src={namedModel.displayPhoto}
        alt={namedModel.name}
        className={styles.mainPic}/>
      <h3>{namedModel.description}</h3>
      <ul>
        {listItems}
      </ul>
      <ul>
        {pictures}
      </ul>
    </div>
  );
};


export default ModelDetail;
