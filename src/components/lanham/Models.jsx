/* eslint-disable max-len */
import React, { useLayoutEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
import styles from './Models.css';
import HeaderLanham from './HeaderLanham';
import PropTypes from 'prop-types';
import ImageLinkDisplay from './ImageLinkDisplay';

const Models = ({ forMainPage }) => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: .5,
  // });

  
  // const modelElements = models.map(model => (
  //   <li className={styles.model}
  //     key={model.name}
  //   >
  //     <ModelItem {...model} />
  //   </li>
  // ));
  
  
  return (
    <div className={!forMainPage ? styles.modelPage : styles.modelPageHome}>
      {!forMainPage &&
        <HeaderLanham forHome={false}/>
      }
      <div className={styles.banner}>
        <h1>All of our Amps are Custom Built</h1>
        <h3>With hand wired construction and come with our 5 year, no questions warranty.</h3>
        <h3>Select a model, then choose function, voicing and finish options to create a unique instrument for your style and sound.</h3>
      </div>
      <div className={styles.modelsBox}>
        <div className={styles.modelsBoxInner}>
          <ImageLinkDisplay />
        </div>
      </div>
      {/* <h2 className={styles.clickReminder}>
        Click any model below for details.
      </h2>
      <div>
        <ul className={styles.list}
          ref={ref}
          style={{
            transition: 'ease-in',
            visibility: inView ? 'visible' : 'hidden'
          }}>
          {modelElements}
        </ul>
      </div> */}
    </div>
  );
};

Models.propTypes = {
  forMainPage: PropTypes.bool
};

export default Models;
