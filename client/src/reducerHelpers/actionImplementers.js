//something like redux thunk
import { startedLoading, errored, loaded, changedSessionID } from './actionCreators';
import axios from 'axios';
import { v1 as uuidv1 } from 'uuid';

export const loadCounter = async (state, dispatch) => {
  dispatch(startedLoading());
  const sessionID = state.sessionID || sessionStorage.getItem(process.env.REACT_APP_SESSIONSTORAGE_SESSIONID_KEY) || uuidv1();
  if (sessionID !== state.sessionID) {
    sessionStorage.setItem(process.env.REACT_APP_SESSIONSTORAGE_SESSIONID_KEY, sessionID);
    dispatch(changedSessionID(sessionID));
  }
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/counters/${sessionID}`);
    dispatch(loaded(res.data.counter));
  } catch (e) {
    console.error(e);
    dispatch(errored());
  }
};

export const changeCounter = async (state, dispatch, counter) => {
  dispatch(startedLoading());
  const sessionID = state.sessionID || sessionStorage.getItem(process.env.REACT_APP_SESSIONSTORAGE_SESSIONID_KEY) || uuidv1();
  if (sessionID !== state.sessionID) {
    sessionStorage.setItem(process.env.REACT_APP_SESSIONSTORAGE_SESSIONID_KEY, sessionID);
    dispatch(changedSessionID(sessionID));
  }
  try {
    const res = await axios.put(`${process.env.REACT_APP_SERVER_LINK}/counters/${sessionID}`, {
      counter
    });
    dispatch(loaded(res.data.counter));
  } catch (e) {
    console.error(e);
    dispatch(errored());
  }
}

export const incrementCounter = async (state, dispatch) => { await changeCounter(state, dispatch, state.counter + 1) };
export const decrementCounter = async (state, dispatch) => { await changeCounter(state, dispatch, state.counter - 1) };
export const resetCounter = async (state, dispatch) => { await changeCounter(state, dispatch, 0) };