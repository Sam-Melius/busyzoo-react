
import './App.css';
import { useState } from 'react';
import Parade from './Parade';
import Sign from './Sign';

function App() {

  const [batSize, setBatSize] = useState(1);
  const [wolfSize, setWolfSize] = useState(1);
  const batStyle = {
    fontSize: `${batSize}rem`
  };
  const wolfStyle = {
    fontSize: `${wolfSize}rem`
  };

  const [animalArray, setAnimalArray] = useState(['gorilla', 'squid']);

  function handleAddDragon() {
    setAnimalArray([...animalArray, 'dragon']);
  }
  function handleAddTrex() {
    setAnimalArray([...animalArray, 'trex']);
  }
  function handleAddGorilla() {
    setAnimalArray([...animalArray, 'gorilla']);
  }
  function handleAddSquid() {
    setAnimalArray([...animalArray, 'squid']);
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <section className='fight'>Monster Battle!!!
        <div className='bat'>
          <p style={batStyle}> 🦇</p>
          <button className={'bat-good'} onClick={() => setBatSize(batSize + 1)}>Bat drinks blood! Bat gets stronger!!!</button>
          <button className={'bat-bad'} onClick={() => setWolfSize(wolfSize - 1)}>Bat bites wolf!!!</button>
        </div>
        <div className='wolf'>
          <p style={wolfStyle}> 🐺</p>
          <button className={'wolf-good'} onClick={() => setWolfSize(wolfSize + 1)}>Its a full moon! Wolf gets stronger!!!</button>
          <button className={'wolf-bad'}onClick={() => setBatSize(batSize - 1)}>Wolf claws bat!!!</button>
        </div>

      </section>
      <section className='sign'>
        <Sign isOpen={isOpen} />
        <div>
          <button className={'closed'} onClick={() => setIsOpen(false)}>Zoo is Closed</button>
          <button className={'open'} onClick={() => setIsOpen(true)}>Zoo is Open</button>
        </div>

      </section>
      <section className='parade'>Animal Parade!
        <Parade animalArray={animalArray} />
        <div>
          <button onClick={handleAddDragon}>Add Dragon</button>
          <button onClick={handleAddTrex}>Add T-Rex</button>
          <button onClick={handleAddGorilla}>Add Gorilla</button>
          <button onClick={handleAddSquid}>Add Squid</button>

        </div>

      </section>
      
      
    </div>
  );
}

export default App;
