
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus'
import Admin from './components/Admin';
function App() {
  return (
    <div className="App">
      <div>
      <h3>app</h3>
      <h2>Current Amount:</h2>
      <h2>Total Points:</h2>
      </div>
     <Account></Account>
     <Bonus></Bonus>
     <Admin></Admin>
    </div>
  );
}

export default App;
