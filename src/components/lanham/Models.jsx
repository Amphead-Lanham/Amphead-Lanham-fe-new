/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { models } from '../../data/models';
import { useInView } from 'react-intersection-observer';
import styles from './Models.css';

const Models = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .3,
  });

  const modelElements = models.map(model => (
    <li className={styles.model}
      key={model.name}
    >
      <div>
        <h1
          className={styles.modelName}>
          {model.name}
        </h1>
        <img src={model.photoUrl} alt={model.name}/>
        <h3 className={styles.pitch} >{model.quickPitch}</h3>
      </div>
    </li>
  )
  
  );
  
  
  return (
    <div className={styles.modelPage}>
      <div className={styles.banner}>
        <h1>all of our amps are custom built</h1>
        <h3>And available in a wide variety of finishes and wraps. Just ask!</h3>
      </div>
      <div>
        <ul className={inView ? styles.list : null}
          ref={ref}
          style={{
            transition: 'ease-in',
            visibility: inView ? 'visible' : 'hidden'
          }}>
          {modelElements}
        </ul>
      </div>
    </div>
  );
};

export default Models;
