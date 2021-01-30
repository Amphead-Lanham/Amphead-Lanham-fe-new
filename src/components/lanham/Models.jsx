/* eslint-disable max-len */
import React, { useLayoutEffect } from 'react';
import { models } from '../../data/models';
import { useInView } from 'react-intersection-observer';
import ModelItem from './ModelItem';
import styles from './Models.css';
import { Link } from 'react-router-dom';

const Models = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .5,
  });

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
      <div className={styles.banner}>
        <h1>all of our amps are custom built</h1>
        <h3>and available in a wide variety of finishes and wraps. just ask!</h3>
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
      <Link to={'/lanham'}>
        <button className={styles.button}>
          Home
        </button>
      </Link>
    </div>
  );
};

export default Models;
