import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,incrementByAmount,getUserAccount } from "../slices/accountSlice";

function Account() {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const amount = useSelector((state) => state.account.amount);

  const handleChange =(e)=>{
   return setValue(+e.target.value)
  }

  return (
    <div className="card">
      <div className="container">
        <h4>
            <b>Account Component</b>
        </h4>
        <h3>Amount: ${amount}</h3>
        <button onClick={()=>dispatch(increment())}>+Increment</button>
        <button onClick={()=>dispatch(decrement())}>-decrement</button>
       <input type='number' onChange={handleChange} placeholder="Put your number"></input>
        <button onClick={()=>dispatch(incrementByAmount(value))}>Increment By {value}</button>
        <button onClick={()=>dispatch(getUserAccount(2))}>Get User</button>
      </div>
    </div>
  );
}

export default Account;

// this only use react

// import { useState } from "react";

// function Account() {
//   const [state, setState] = useState({ amount: 0 });
//   const [inputVal, setInputVal] = useState(4);
//   //  console.log(inputVal)
//   const increment = () => {
//     return setState({ amount: state.amount + 1 });
//   };

//   const decrement = () => {
//     return setState({ amount: state.amount - 1 });
//   };
//   function handleChange(e) {
//     //e.preventdefault()

//     // console.log()
//     return setInputVal(e.target.value);
//   }

//   const incByAmt = (inputVal) => {
//     return setState({ amount: state.amount + Number(inputVal) });
//   };
//   return (
//     <div className="acoount">
//       <h3>account components</h3>
//       <h2>amount: {state.amount}</h2>
//       <button onClick={increment}>+Increment</button>
//       <button onClick={decrement}>-Decrement</button>
//       <input type="text" name="inputVal" onChange={handleChange}></input>
//       <button onClick={() => incByAmt(inputVal)}>IncrementByAmount</button>
//     </div>
//   );
// }

// export default Account;
