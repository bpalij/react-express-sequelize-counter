import React from 'react';
import initialState from './initialState';

const StateContext = React.createContext(initialState); // pass state value in provider

export default StateContext;