import React from 'react';

export default function Sign({ isOpen }) {
  return <div>
    {
      isOpen ? 'The Zoo is OPEN!!!' : 'The Zoo is Closed.'
    }

  </div>;
}
