import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import Addtask from './pages/Addtask';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[userName, setUserName] = useState('');
  // const[email, setEmail] = useState('');
  

  return (
    <div>
      
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName}/>} />
        <Route path='signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='dashboard' element={<Dashboard userName={userName}/>} />
        <Route path='addtask' element={<Addtask/>} />
      </Routes>

    </div>
  );
}

export default App;
