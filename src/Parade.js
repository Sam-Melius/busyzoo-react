import React from 'react';
import Animal from 'Animal';

export default function Parade(props) {
  return <div className='parade'>
    {props.animalArray.map((animal, i) =>
      <Animal key={animal + i} animal={animal} />)}

  </div>;
}
