import { useState } from 'react';

const Counter = ({ count, setCount }) => {
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}

const ShowCount = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <p>You clicked {count} times</p>
    </div>
  );
}

export default ShowCount;