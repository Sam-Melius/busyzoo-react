import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [batSize, setBatSize] = useState(1);
  const [wolfSize, setWolfSize] = useState(1);
  const batStyle = {
    fontSize: `${batSize}rem`
  };
  const wolfStyle = {
    fontSize: `${wolfSize}rem`
  };

  return (
    <div className="App">
      <section className='fight'>
        <div className='bat'>
          <p style={batStyle}> 🦇</p>
          <button onClick={() => setBatSize(batSize + 1)}>Bat consumes blood and gets stronger!</button>
          <button onClick={() => setWolfSize(wolfSize - 1)}>Bat bites wolf!!!</button>
        </div>
        <div className='wolf'>
          <p style={wolfStyle}> 🐺</p>
          <button onClick={() => setWolfSize(wolfSize + 1)}>Its a full moon! Wolf gets stronger!!!</button>
          <button onClick={() => setBatSize(batSize - 1)}>Wolf claws bat!!!</button>
        </div>

      </section>
      <section className='sign'>

      </section>
      <section className='parade'>

      </section>
    </div>
  );
}

export default App;
