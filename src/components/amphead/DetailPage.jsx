import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { sections } from '../../data/details.js';
import styles from './DetailPage.css';

const DetailPage = () => {
  const { name } = useParams();
  const section = sections.find(section => section.name === name);
  const listItems = section.listInfo.map((i, index) => (
    <li key={index}>
      {i}
    </li>
  ));
  const figures = section.figures.map((figure, index) => (
    <div className={styles.figure} key={index}>
      <img className={styles.figurePic} src={figure.imageUrl}/>
      <p className={styles.figCaption} >{figure.figCaption}</p>
    </div>
  ));
  
  
  return (
    <div className={styles.bigBox}>
      <div className={styles[name]}>
        <div className={styles.textBox}>
          <h1 className={styles.headline}>{section.header}</h1>
          <p className={styles.info}>{section.info}</p>
          <ul className={styles.list}>
            {listItems}
          </ul>
          <ul className={styles.figureBox} >
            {figures}
          </ul>
        </div>
        <Link to={'/'}>
          <button className={styles.button}>home</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailPage;
