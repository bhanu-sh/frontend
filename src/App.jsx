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
import Browse from './components/Browse';
import ManageUser from './components/ManageUser';
import UserAuth from './components/UserAuth';
import { AnimatePresence } from 'framer-motion';
import { AppProvider } from './AppContext';
import { Toaster } from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div>
      <Toaster position='top right' />
      <AnimatePresence mode = "popLayout">

      
        <BrowserRouter>
          <AppProvider>

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
              <Route element = {<Browse />} path="/browse" />
              <Route element = {<UserAuth><ManageUser /></UserAuth> } path="/manageuser" />
              <Route element = {<UpdateUser /> } path="/updateuser/:id" />
              <Route element = {<NotFound />} path="*" />
            </Routes>
          </AppProvider>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;