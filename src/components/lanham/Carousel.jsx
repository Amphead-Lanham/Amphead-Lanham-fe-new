import React, { useEffect, useState } from 'react';
import styles from './carousel.css';
import { models } from '../../data/models.js';
import { useInterval } from '../../hooks/hooks';

export default function carousel() {
  const [slidePositions, setSlidePositions] = useState({});

  const resetSlidePositions = () => {
    const initialPositions = {};
    models.forEach((model, i) => {
      const position = () => {
        if(i === 0) return 'current';
        if(i === models.length - 1) return 'last';
        else return 'offScreen';
      };
      initialPositions[i] = position();
    });
    setSlidePositions(initialPositions);
  };

  useEffect(() => {
    resetSlidePositions();
  }, []);

  const getNextIndex = (arr, i) => {
    if(i === arr.length - 1) return 0;
    else return i + 1;
  };

  useInterval(() => {
    const newPositions = {};
    const currentOrder = Object.values(slidePositions);
    currentOrder.forEach((pos, i) => {
      const nextIndex = getNextIndex(currentOrder, i);
      newPositions[nextIndex] = pos;
    });
    setSlidePositions(newPositions);
  }, 8000);

  const slides = models.map((model, i) => (
    <div 
      className={`
        ${styles.slide} 
        ${styles[slidePositions[i]]}
      `} 
      id={`${model.name}_slide`}  
      key={model.name}
    >
      <div className={styles.slideInfo}>
        <h1>
          {model.name}
        </h1>
        <h3>{model.quickPitch}</h3>
      </div>
      <div className={styles.imageWrapper}>
        <div style={{ position: 'relative' }}>
          <img 
            className={styles.slidePic} 
            src={model.photoUrl} 
          />
          <div className={styles.psuedoPsuedo}></div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className={styles.carouselOuter}>
        {slides}
      </div>
      {/* <div className={styles.carouselOuter}>
        <div className={`
          ${styles.slide} 
          ${styles.current}
        `}>
          <div className={styles.slideInfo}>
            <h1>
              {models[0].name}
            </h1>
            <h3>{models[0].quickPitch}</h3>
          </div>
          <div className={styles.imageWrapper}>
            <div style={{ position: 'relative' }}>
              <img className={styles.slidePic} src={models[0].photoUrl} />
              <div className={styles.psuedoPsuedo}></div>
            </div>
          </div>
          
        </div>
      </div> */}
    </>
  );
}
