import React, { useContext } from 'react';
import StateContext from '../reducerHelpers/StateContext';
import DispatchContext from '../reducerHelpers/DispatchContext';
import { resetCounter, incrementCounter, decrementCounter } from '../reducerHelpers/actionImplementers';
import '../App.css';

const Counter = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <h1>Title</h1>
      <span>{state.counter}</span>
      <button 
        type="button"
        disabled={state.disableCounter}
        onClick={(e) => {
          e.preventDefault();
          resetCounter(state, dispatch);
        }}
      >Reset counter</button>
      <button 
        type="button"
        disabled={state.disableCounter}
        onClick={(e) => {
          e.preventDefault();
          incrementCounter(state, dispatch);
        }}
      >Inc counter +1</button>
      <button 
        type="button"
        disabled={state.disableCounter}
        onClick={(e) => {
          e.preventDefault();
          decrementCounter(state, dispatch);
        }}
      >Dec counter -1</button>
    </div>
  );
};

export default Counter