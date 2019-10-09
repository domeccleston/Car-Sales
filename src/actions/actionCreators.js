// (7) CREATE ACTION CREATORS THAT WILL ACTIVATE OUR REDUCER(S): create functions that will take in data on the 
// feature being bought/sold, and return an object that we will send to the redux store to modify state.

import * as types from "./actionTypes";

export const buyItem = item => {
  return {
    type: types.BUY_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: types.REMOVE_ITEM,
    payload: item
  };
};
