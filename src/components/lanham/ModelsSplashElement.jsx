import React, { useState } from 'react';
import { models } from '../../data/models.js';
import { useInterval } from '../../hooks/hooks.js';
import styles from './ModelsSplashElement.css';

const modelsSplashElement = () => {
  const [modelIndex, setModelIndex] = useState(0);
  const displayModel = models[modelIndex];

  useInterval(() => {
    (modelIndex > models.length - 2) ? setModelIndex(0)
      : setModelIndex(modelIndex => modelIndex + 1);
  }, 7000);


  return (
    <div  className={styles.modelBox}>
      <div className={styles[displayModel.modelStyleCode]} >
        <h1 className={styles.displayModel} >{displayModel.name}</h1>
        <div className={styles.imageBox} >
          <img
            className={styles.modelPic}
            src={displayModel.photoUrl}
            alt={displayModel.name}/>
          <h3 className={styles.quickPitch} >{displayModel.quickPitch}</h3>
        </div>
      </div>
    </div>
  );
};

export default modelsSplashElement;
