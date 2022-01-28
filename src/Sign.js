import React from 'react';

export default function Sign(props) {
  return <div>
    {
      props.isOpen ? 'The Zoo is OPEN!!!' : 'The Zoo is Closed.'
    }

  </div>;
}
