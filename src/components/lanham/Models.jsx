import React, { useEffect } from 'react';
import { models } from '../../data/models';
import styles from './Models.css';

const Models = () => {

  const modelElements = models.map(model => (
    <li className={styles.model} key={model.name}>
      <h1
        className={styles.modelName}>
        {model.name}
      </h1>
      <img src={model.photoUrl} alt={model.name}/>
      <h3 className={styles.pitch} >{model.quickPitch}</h3>
    </li>
  )
  
  );
  
  
  return (
    <div>
      <ul>
        {modelElements}
      </ul>
    </div>
  );
};

export default Models;
