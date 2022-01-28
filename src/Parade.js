import React from 'react';
import AnimalPic from './AnimalPic';

export default function Parade(props) {
  
  return <div>
    {props.animalArray.map((animal, i) =>
      <AnimalPic key={animal + i} animalName={animal} />)} 

  </div>;
}
