import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const Counter = () => {
  const counts = useSelector((state) => state.counter.counts);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{counts}</p>
      <button onClick={() => dispatch(increment())}>
        <h4>Add</h4>Add
      </button>
      <button onClick={() => dispatch(decrement())}>
        <h4>Minus</h4>
      </button>
      <button onClick={() => dispatch(reset())}>
        <h4>Reset</h4>
      </button>
    </section>
  );
};

export default Counter;
