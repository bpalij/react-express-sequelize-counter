import { STARTED_LOADING, ERRORED, LOADED, CHANGED_SESSIONID } from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case STARTED_LOADING:
      return {
        showLoading: true,
        showError: false,
        showCounter: false,
        sessionID: state.sessionID,
        disableCounter: true,
        counter: '',
      }
    case ERRORED:
      return {
        showLoading: false,
        showError: true,
        showCounter: false,
        sessionID: state.sessionID,
        disableCounter: true,
        counter: '',
      }
    case LOADED:
      return {
        showLoading: false,
        showError: false,
        showCounter: true,
        sessionID: state.sessionID,
        disableCounter: false,
        counter: action.payload,
      }
    case CHANGED_SESSIONID:
      return {...state, sessionID: action.payload}
    default:
      return state;
  }
}

export default reducer;