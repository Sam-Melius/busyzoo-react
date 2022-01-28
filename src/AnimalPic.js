import React from 'react';

export default function AnimalPic(props) {
  return <span>
    {props.animalName === 'dragon' && '🐉'}
    {props.animalName === 'trex' && '🦖'}
    {props.animalName === 'gorilla' && '🦍'}
    {props.animalName === 'squid' && '🦑'}

  </span>;
}
