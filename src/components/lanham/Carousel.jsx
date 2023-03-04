import React, { useEffect, useState } from 'react';
import styles from './Carousel.css';
import { models } from '../../data/models.js';
import { useInterval } from '../../hooks/hooks';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';

export default function carousel() {
  const [slidePositions, setSlidePositions] = useState({});
  const [intLength, setIntLength] = useState(8000);

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

  const getNextIndex = (arr, i, forward) => {
    const last = arr.length - 1;
    if(i == last && forward) return 0;
    if(i == 0 && !forward) return last;
    else return forward ? i + 1 : i - 1;
  };

  const advanceSlide = (forward) => {
    const newPositions = {};
    let currentOrder = Object.values(slidePositions);
    if(!forward) {
      const backwardClasses = {
        current: 'currentBackward',
        last: 'lastBackward'
      };
      currentOrder = currentOrder.map(i => (
        backwardClasses[i] || i 
      ));
    } else if(currentOrder.find(i => i === 'currentBackward')) {
      const forwardClasses = {
        currentBackward: 'current',
        lastBackward: 'last'
      };
      currentOrder = currentOrder.map(i => (
        forwardClasses[i] || i
      ));
    }
    currentOrder.forEach((pos, i) => {
      const nextIndex = getNextIndex(currentOrder, i, forward);
      newPositions[nextIndex] = pos;
    });
    setSlidePositions(newPositions);
  };

  const handleSlideAdvance = (forward) => {
    clearInterval(reset);
    advanceSlide(forward);
    setIntLength(null);
    const reset = setTimeout(() => {
      setIntLength(8000);
    }, 1000);
  };

  useInterval(() => {
    advanceSlide(true);
  }, intLength);

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
        <div className={`${styles.arrowButton}`}>
          <IconButton 
            color="secondary" 
            size="large"
            onClick={() => handleSlideAdvance(false)}  
          >
            <ArrowBackIosNewIcon color="info" />
          </IconButton>
        </div>
        <div className={`${styles.arrowButton} ${styles.forward}`}>
          <IconButton 
            color="secondary"
            size="large"
            onClick={() => handleSlideAdvance(true)}  
          >
            <ArrowForwardIosIcon color="info" />
          </IconButton>
        </div>
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
