import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const Counter = () => {
  const counts = useSelector((state) => state.counter.counts);
  const dispatch = useDispatch();

  const [addAmt, setAddAmt] = useState(0);
  const val = Number(addAmt) || 0; // ensure its a number

  const resetAll = () => {
    setAddAmt(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{counts}</p>
      <div>
        <button onClick={() => dispatch(increment())}>
          <h4>Add</h4>Add
        </button>
        <button onClick={() => dispatch(decrement())}>
          <h4>Minus</h4>
        </button>
      </div>
      <input
        type="text"
        value={addAmt}
        onChange={(e) => {
          setAddAmt(e.target.value);
        }}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(val))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(resetAll)}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
