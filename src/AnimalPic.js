import React from 'react';

export default function AnimalPic(props) {
  return <div className='animal'>
    {props.animal === 'dragon' && '🐉'}
    {props.animal === 't-rex' && ' 🦖'}
    {props.animal === 'gorilla' && ' 🦍'}
    {props.animal === 'squid' && ' 🦑'}

  </div>;
}
