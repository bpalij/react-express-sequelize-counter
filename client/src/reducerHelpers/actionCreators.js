import { STARTED_LOADING, ERRORED, LOADED, CHANGED_SESSIONID } from './actionTypes';

export const startedLoading = () => ({ type: STARTED_LOADING });

export const errored = () => ({ type: ERRORED });

export const loaded = (counter) => ({ type: LOADED, payload: counter });

export const changedSessionID = (sessionID) => ({ type: CHANGED_SESSIONID, payload: sessionID });