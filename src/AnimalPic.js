import React from 'react';

export default function AnimalPic({ animalName }) {
  return <span>
    {animalName === 'dragon' && '🐉'}
    {animalName === 'trex' && '🦖'}
    {animalName === 'gorilla' && '🦍'}
    {animalName === 'squid' && '🦑'}

  </span>;
}
