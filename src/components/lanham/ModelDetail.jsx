import React, { useLayoutEffect } from 'react';
import styles from './ModelDetail.css';
import { Link, useParams } from 'react-router-dom';
import { models } from '../../data/models';
import HeaderLanham from './HeaderLanham';

const ModelDetail = () => {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

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
      <HeaderLanham forHome={false} />
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
        <div to={'/lanham'} className={styles.link}>
          <button onClick={handleClick} >Back to Top</button>
        </div>
        <Link to={'/lanham/models'} className={styles.link}>
          <button>Models Home</button>
        </Link>
      </div>
    </div>
  );
};


export default ModelDetail;
