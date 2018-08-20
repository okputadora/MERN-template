import * as actionTypes from './actionTypes';
// ACTION CREATORS
// receives payload from an action -- in this case username
export const updateMessage = (message) => {
  return {
    type: actionTypes.UPDATE_MESSAGE,
    message,
  }
}
export const sendMessage = (message) => {
  return {
    type: actionTypes.SEND_MESSAGE,
    message,
  };
};
