import React from 'react';
import { useParams } from 'react-router-dom';
import { sections } from '../../data/details.js';
import styles from './DetailPage.css';
import Header from './Header.jsx';
import PopUp from '../contact/PopUp.jsx';

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
          {section.name == 'gen-info' ?
            <span className={styles.info}>
              <span>
                Service bench cost is $100 per hour.&nbsp; 
                The schedule varies with the workload. Please&nbsp;
              </span>
              <PopUp
                side={'amphead'}
                formId={'amphead'}
                inline
              /> 
              <span>
                &nbsp;us for current turnaround times.&nbsp;
                Let us know your situation, we can usually accommodate.&nbsp; 
                Rush service, when available, is $60.
              </span>
            </span>
            
            : <p className={styles.info}>{section.info}</p>
          }
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
