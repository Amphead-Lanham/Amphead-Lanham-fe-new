import React from 'react';
import styles from './ModelDetail.css';
import { Link, useParams } from 'react-router-dom';
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
    <div className={styles[namedModel.modelStyleCode]}>
      <h1>{namedModel.name}</h1>
      <div className={styles.figBox}>
        <img
          src={namedModel.displayPhoto}
          alt={namedModel.name}
          className={styles.mainPic}/>
        <h3>{namedModel.description}</h3>
      </div>
      <ul className={styles.listBox} >
        {listItems}
      </ul>
      <ul className={styles.picBox} >
        {pictures}
      </ul>
      <div className={styles.buttonBox}>
        <Link to={'/lanham'} className={styles.link}>
          <button>Lanham Home</button>
        </Link>
        <Link to={'/lanham/models'} className={styles.link}>
          <button>Models Home</button>
        </Link>
      </div>
    </div>
  );
};


export default ModelDetail;
