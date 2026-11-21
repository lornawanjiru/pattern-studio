import {useState} from 'react';

function BustCounter() {
  const [bust, setBust] = useState(88);

  const increment = () => {
    setBust(bust + 1);
  };

  const decrement = () => {
    setBust(bust - 1);
  };

  return (
    <div>
      <h2>Bust Counter</h2>
      <p>Current Count: {bust} cm</p>
      <button onClick={increment}> +1 cm</button>
      <button onClick={decrement}> -1 cm</button>
    </div>
  );
}

export default BustCounter;