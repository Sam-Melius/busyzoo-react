import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Animal Parade!/i);
  expect(linkElement).toBeInTheDocument();
});

test('change "The Zoo is Closed" to "The Zoo is OPEN!!!"', () => {
  render(<App />);

  const openEl = screen.getByText('The Zoo is Closed.');
  expect(openEl).toBeInTheDocument();

  const buttonEl = screen.getByText('Zoo is Open');
  expect(buttonEl).toBeInTheDocument();

  fireEvent.click(buttonEl);

  const openZoo = screen.getByText('The Zoo is OPEN!!!');
  expect(openZoo).toBeInTheDocument();

});

test('dragon and trex is added to dom on click of each button', () => {
  render(<App />);

  const dragonButton = screen.getByText('Add Dragon');
  expect(dragonButton).toBeInTheDocument();

  fireEvent.click(dragonButton);

  const dragonEl = screen.getByText('🐉');
  expect(dragonEl).toBeInTheDocument();

  const trexButton = screen.getByText('Add T-Rex');
  expect(trexButton).toBeInTheDocument();

  fireEvent.click(trexButton);

  const trexEl = screen.getByText('🦖');
  expect(trexEl).toBeInTheDocument();

});

// test('', () => {
//   render(<App />);

//   const batButton = screen.getByText('Bat drinks blood! Bat gets stronger!!!');
//   expect(batButton).toBeInTheDocument();

//   fireEvent.click(batButton);

//   const batEl = screen.getByText('🦇');
//   expect(batEl).toHaveAttribute('fontSize', '2rem');


// });
