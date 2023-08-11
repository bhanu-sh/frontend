import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import FbPost from './components/FbPost';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      
      <BrowserRouter>

        <Navbar />

        {/* <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link> */}

        <Routes>
          <Route element = {<Home />} path="/" />
          <Route element = {<Login />} path="/login" />
          <Route element = {<Signup />} path="/signup" />
          <Route element = {<EventHandling />} path="/event" />
          <Route element = {<StateManagement />} path="/state" />
          <Route element = {<FbPost />} path="/fbpost" />
          <Route element = {<Todo />} path="/todo" />
          <Route element = {<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;