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
    let flipIt = false;
    let currentOrder = Object.values(slidePositions);
    if(!forward) {
      const backwardClasses = {
        current: 'lastBackward',
        last: 'currentBackward'
      };
      currentOrder = currentOrder.map(i => {
        if(backwardClasses[i]) flipIt = true;
        return backwardClasses[i] || i; 
      });
    } else {
      const forwardClasses = {
        currentBackward: 'last',
        lastBackward: 'current'
      };
      currentOrder = currentOrder.map(i => {
        if(forwardClasses[i]) flipIt = true;
        return forwardClasses[i] || i;
      });
    }
    if(!flipIt) {
      currentOrder.forEach((pos, i) => {
        const nextIndex = getNextIndex(currentOrder, i, forward);
        newPositions[nextIndex] = pos;
      });
    } else {
      currentOrder.forEach((pos, i) => {
        newPositions[i] = pos;
      });
    }
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
  );
}
