/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useEffect } from 'react';
import { loadCounter } from './reducerHelpers/actionImplementers';
import initialState from './reducerHelpers/initialState';
import reducer from './reducerHelpers/reducer';
import Loading from './components/Loading';
import Error from './components/Error';
import Counter from './components/Counter';
import StateContext from './reducerHelpers/StateContext';
import DispatchContext from './reducerHelpers/DispatchContext';
// import logo from './logo.svg';
import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      await loadCounter(state, dispatch);
    })();
  }, []);

  return (
    <div>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {(state.showLoading && <Loading />)}
          {(state.showError && <Error />)}
          {(state.showCounter && <Counter />)}
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  )
}

export default App;
