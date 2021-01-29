import React from 'react';
import {  useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import styles from './Models.css';
import { Link } from 'react-router-dom';

const ModelItem = ({ name, photoUrl, quickPitch }) => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: .3,
  });

  return (
    <div
      className={inView ? styles.model : null}
      ref={ref}
      key={name}
      style={{
        transition: 'ease-in',
        visibility: inView ? 'visible' : 'hidden'
      }}
    >
      <div>
        <Link
          to={`/lanham/model/${name}`}
          className={styles.link}
        >
          <h1
            className={styles.modelName}>
            {name}
          </h1>
        </Link>
        <img
          src={photoUrl}
          alt={name}
          className={inView ? styles.modelPagePic : null}
          ref={ref}
        />
        <h3 className={styles.pitch} >{quickPitch}</h3>
      </div>
    </div>
   
  );
};

ModelItem.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  quickPitch: PropTypes.string.isRequired
};

export default ModelItem;
