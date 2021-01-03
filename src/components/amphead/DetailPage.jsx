import React from 'react';
import { useParams } from 'react-router-dom';
import { sections } from '../../data/details.js';

const DetailPage = () => {
  const { name } = useParams();
  const section = sections.find(section => section.name === name);
  const listItems = section.listInfo.map((i, index) => (
    <li key={index}>
      {i}
    </li>
  ));
  
  
  return (
    <div>
      <h1>{section.header}</h1>
      <img src={section.photo} />
      <p>{section.info}</p>
      <ul>
        {listItems}
      </ul>
    </div>
  );
};

export default DetailPage;
