 import { useState } from 'react';
import './Account.css'
import { increment,decrement,incrementByAmount,getUserAccount } from './reduxAction';
import {useSelector,useDispatch} from 'react-redux'

 
 function Account(){
  const [value,setValue] =useState(0);
   const amount= useSelector(state=> state.account.amount);
   const points= useSelector(state=> state.account.points);
   const dispatch= useDispatch()

  
    return(
        <div className="card">
        <div className="container">


        <h4>
            <b>Account Component</b>
          </h4>
          <h3>Amount:${amount}</h3>
          <h3>points:${points}</h3>
          <button onClick={()=>dispatch(increment())}>Increment +</button>
          <button onClick={()=>dispatch(decrement())}>Decrement -</button>
          <input type='text' onChange={(e)=>setValue(+e.target.value)}></input>
          <button onClick={()=>dispatch(incrementByAmount(value))}>Increment By {value} +</button>
          <button onClick={()=>dispatch(getUserAccount(1))}>Init Account</button>


          {/* <h4>
            <b>Account Component</b>
          </h4>
          <h3>Amount:${account.amount}</h3>
         
          <button onClick={incrementAmt}>Increment+</button>
          <button onClick={decrementAmt}>-Decrement</button>
          <input type='text' onChange={handleChange}></input>
          <button onClick={()=>incrementByAmount(value)}>AddByAmt</button> */}
        </div>
      </div>
    )
 }

 export default Account ;