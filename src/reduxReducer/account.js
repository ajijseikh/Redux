import{
    getAccUserFulFilled,
    getAccUserRejected,
    getAccUserPending,
   inc,
   dec,incByAmount
} from '../components/reduxAction/index.js'

// reducer function
export function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getAccUserFulFilled:
      return { amount: action.payload, pending: false };
    case getAccUserRejected:
      return { ...state, error: action.error.message, pending: false };
    case getAccUserPending:
      return { ...state, pending: true };

    case inc:
      return { amount: state.amount + 1 }; // return new state
    case dec:
      return { amount: state.amount - 1 };
    case incByAmount:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}
