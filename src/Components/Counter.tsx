import React, { useState } from "react";

interface IProps {
  count: number;
}

interface IState {
  count: number;
}

export default function Counter(props: IProps): JSX.Element {
  const [count, setCounter] = useState(props.count);
  const state: IState = { count: 0 };

  const increment = (): any => {
    console.log(state);
    setCounter(count + 1);
  };

  const decrement = (): any => {
    console.log(state);
    setCounter(count - 1);
  };
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button data-testid="decrement" id="decrement" onClick={decrement}>
          -
        </button>
        <div data-testid="counter" key={count}>
          {count}
        </div>
        <button data-testid="increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
