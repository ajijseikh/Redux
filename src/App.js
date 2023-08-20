
// import { useState } from 'react';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import {useSelector} from 'react-redux'


function App() {

  const amount= useSelector((state)=>state.account.amount);
  const points= useSelector((state)=>state.bonus.points)
  const account= useSelector((state)=>state.account);




  // const [account,setAccount]= useState({amount:0})

  // const [value, setValue] = useState(1);
  
  // const incrementAmt= ()=>{
  //    setAccount({amount:account.amount + 1 })
  // }
  // const decrementAmt=()=>{
  //  setAccount({amount:account.amount - 1 })
  // }

  // const incrementByAmount = (value)=>{
  //     setAccount({amount: account.amount + value})
  // }
  // const handleChange=(e)=>{
  //     setValue(+e.target.value)
  // }
  // // Bonus 
  // const [bonus,setBonus]= useState({points:0})
  //   const incrementPoint= ()=>{
  //        setBonus({points:bonus.points + 1 })
  //   }


  return (
    <div className="App">

      <h4>App</h4>
      {account.pending ? (
        <p>loading....</p>
      ) : account.error ? (
        <p>{account.error}</p>
      ) : (
        <h3>Current Amount : {amount} </h3>
      )}
      <h3>Total Bonus : {points}</h3>

      <Account></Account>
      <Bonus></Bonus>




      {/* <h4>App</h4>
      {account.pending ? (
        <p>loading...</p>
      ) : account.error ? (
        <p>{account.error}</p>
      ) : (
        <h3> Current Amount : {account.amount} </h3>
      )
    }
    <h3>Total Bonus : {bonus.points} </h3>
    <Account 
    incrementAmt={incrementAmt} 
    decrementAmt={decrementAmt}
    incrementByAmount={incrementByAmount}
    account={account}
    value={value}
    handleChange={handleChange}
    ></Account>
    <Bonus 
    incrementPoint={incrementPoint}
    bonus={bonus}
    ></Bonus>
     */}
     </div>
  );
}

export default App;
