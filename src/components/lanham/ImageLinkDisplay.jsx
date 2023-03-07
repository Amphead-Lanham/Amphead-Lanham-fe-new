import React from 'react';
import { models } from '../../data/models';
import ImageLinkCard from './ImageLinkCard';

export default function ImageLinkDisplay() {
  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap',
      alignItems: 'space-between',
      justifyContent: 'space-around',
      width: '100%',
    }}>
      { models.map((model) => (
        <ImageLinkCard model={model} key={model.name}/>
      ))}
    </div>
  );
}
