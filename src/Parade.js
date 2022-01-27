import React from 'react';
import AnimalPic from './AnimalPic';

export default function Parade(props) {
  return <div className='parade'>
    {props.animalArray.map((animal, i) =>
      <AnimalPic key={animal + i} animal={animal} />)}

  </div>;
}
