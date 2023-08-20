import { useState } from "react";

import { incrementBonus } from "./reduxAction/index";

import "./bonus.css"
import {useSelector,useDispatch} from 'react-redux';

  

  function Bonus(){
    
   const amount=useSelector(state=>state.account.amount);
   const points=useSelector(state=>state.bonus.points)
   const dispatch=useDispatch();
    return (
        <div className="card">
        <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        {/* <h3> Total points: {bonus.points}</h3> */}
        <h3>Amount: ${amount}</h3>
        <h3> Total points: {points}</h3>
      {/* <button onClick={incrementPoint}>+Increment</button> */}
      <button onClick={()=>dispatch(incrementBonus())}>+Increment</button>
      </div>
      </div>
    )
  }
  export default Bonus;