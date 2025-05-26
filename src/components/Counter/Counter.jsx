import { useState } from 'react';
import Button from '../Button/Button';
import Display from '../Display/Display';
import './Counter.css'; // Archivo de estilos local

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Contador</h1>
      <Display value={count} />
      <div className="buttons-container">
        <Button onClick={decrement}>Restar</Button>
        <Button onClick={increment}>Sumar</Button>
      </div>
    </div>
  );
};

export default Counter;