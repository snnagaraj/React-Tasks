import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import Task from './Task/Task';
import{Statecontext} from './Context/stateContext'
import {initialvalue, stateReduce} from './Context/Reduce'

function RoutesComponent(){
  const [state,dispatch]=useReducer(stateReduce,initialvalue)
  return(
    <Statecontext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="Home" element={<Home />}></Route>
      <Route path="Task" element={<Task />}></Route>
    </Routes>
    </BrowserRouter>
    </Statecontext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RoutesComponent />);


