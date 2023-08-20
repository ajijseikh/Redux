import { incBonus,incByAmount } from "../components/reduxAction";

export function bonusReducer(state = { points: 0}, action){
    switch(action.type){
     case incBonus:
         return {points: state.points + 1};
     case incByAmount:
          if(action.payload >= 100)
          return { points: state.points + 1};
         default:
             return state ;    
    }
  }