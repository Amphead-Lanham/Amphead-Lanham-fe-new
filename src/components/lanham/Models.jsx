/* eslint-disable max-len */
import React, { useLayoutEffect } from 'react';
import { models } from '../../data/models';
import { useInView } from 'react-intersection-observer';
import ModelItem from './ModelItem';
import styles from './Models.css';
import { Link } from 'react-router-dom';
import HeaderLanham from './HeaderLanham';

const Models = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .5,
  });

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const modelElements = models.map(model => (
    <li className={styles.model}
      key={model.name}
    >
      <ModelItem {...model} />
    </li>
  )
  
  );
  
  
  return (
    <div className={styles.modelPage}>
      <HeaderLanham forHome={false}/>
      <div className={styles.banner}>
        <h1>All of our Amps are Custom Built</h1>
        <h3>Select a model, then chose function, voicing and finish options to create a unique instrument for your style and sound. Click any model below for details.</h3>
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
      <button 
        onClick={handleClick}
        className={styles.button}>
          back to top
      </button>
    </div>
  );
};

export default Models;
