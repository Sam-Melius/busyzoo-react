import React from 'react';
import AnimalPic from './AnimalPic';

export default function Parade({ animalArray }) {
  
  return <div>
    {animalArray.map((animal, i) =>
      <AnimalPic key={animal + i} animalName={animal} />)} 

  </div>;
}
