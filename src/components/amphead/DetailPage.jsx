import React from 'react';
import { useParams } from 'react-router-dom';
import { sections } from '../../data/details.js';
import styles from './DetailPage.css';
import Header from './Header.jsx';

const DetailPage = () => {
  const { name } = useParams();
  const section = sections.find(section => section.name === name);
  
  const listItems = section.listInfo.map((item, index) => (
    <li key={index}>
      <p>{item}</p>
    </li>
  )); 
 
  const figures = section.figures.map((figure, index) => (
    <li className={styles.figure} key={`fig${index}`}>
      <img className={styles.figurePic} src={figure.imageUrl}/>
      <p className={styles.figCaption} >{figure.figCaption}</p>
    </li>
    
  ));
   
  return (
    <div className={styles.bigBox}>
      <div className={styles[name]}>
        <Header isHome={false} />
        <div className={styles.textBox}>
          <h1 className={styles.headline}>{section.header}</h1>
          <p className={styles.info}>{section.info}</p>
          {listItems &&
          <ul className={styles.list}>
            { listItems }
          </ul>
          }
          {figures &&
          <ul className={styles.figureBox} >
            { figures }
          </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
