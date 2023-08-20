import axios from "axios";

// action name constants
export const inc = "account/increment";
export const dec = "account/decrement";
export const incByAmount = "account/incrementByAmount";
export const getAccUserFulFilled = "account/getUser/fulfilled";
export const getAccUserRejected = "account/getUser/rejected";
export const getAccUserPending = "account/getUser/pending";
export const incBonus = "bonus/increment";

// action function creators:

 export function getUserAccount(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(getAccountUserPending());
      const { data } = await axios.get(`http://localhost:3001/getuser/${id}`);
      console.log("amount", data.data.amount);
      dispatch(getAccountUserFulFilled(data.data.amount));
    } catch (error) {
      return dispatch(getAccountUserRejected(error.message));
    }
  };
}

export function getAccountUserFulFilled(value) {
  return { type: getAccUserFulFilled, payload: value };
}

export function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error: error };
}

export function getAccountUserPending() {
  return { type: getAccUserPending };
}

export function increment() {
  return { type: inc };
}
export function decrement() {
  return { type: dec };
}
export function incrementByAmount(value) {
  return { type: incByAmount, payload: value };
}
export function incrementBonus() {
  return { type: incBonus };
}
