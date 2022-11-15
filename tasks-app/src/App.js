import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Router>
         <Route path='/' element={<Login />}></Route>
         <Route path='Home' element={<Home />}></Route>
      </Router>
    </BrowserRouter>
    );
}

export default App
