import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [batSize, setBatSize] = useState(1);
const [wolfSize, setWolfSize] = useState(1);

  return (
    <div className="App">
      <section className='fight'>
        <div className='bat'>
          <p> 🦇</p>
        </div>
        <div className='wolf'>
          <p> 🐺</p>
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
