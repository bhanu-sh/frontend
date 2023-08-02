import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Home />
      <Login />
      <Signup />
    </div>
  );
}

export default App;