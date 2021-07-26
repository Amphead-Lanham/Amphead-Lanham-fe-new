import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { models } from '../../data/models.js';
import { useInterval } from '../../hooks/hooks.js';
import styles from './ModelsSplashElement.css';

const ModelsSplashElement = () => {
  const [modelIndex, setModelIndex] = useState(0);
  const displayModel = models[modelIndex];

  useInterval(() => {
    (modelIndex > models.length - 2) ? setModelIndex(0)
      : setModelIndex(modelIndex => modelIndex + 1);
  }, 7000);
  
  
  return (
    <div  className={styles.modelBox}>
        
      <div className={styles[displayModel.modelStyleCode]} >
        <Link
          to={`/lanham/model/${displayModel.name}`}
          className={styles.link}
        >
          <h1
            className={styles.displayModel} 
          >
            {displayModel.name}
          </h1>
        </Link>
        <div className={styles.imageBox} >
          <Link to={'/lanham/models'}>
            <img
              className={styles.modelPic}
              src={displayModel.photoUrl}
              alt={displayModel.name}/>
          </Link>
          <h3 className={styles.quickPitch} >{displayModel.quickPitch}</h3>
        </div>
      </div>
    </div>
    
  );
};

export default ModelsSplashElement;
