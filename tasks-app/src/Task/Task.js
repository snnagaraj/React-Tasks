import React, { useState ,useContext,useReducer} from 'react'
import './Task.css'
import {Statecontext} from '../Context/stateContext'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Task = () => {
  const [userinput,setUserInput]=useState("");
  const [usertext,setUserText]=useState("");
  const [userdate,setUserDate]=useState("");
  const [task,addTask]=useState([]);
  const {state,dispatch}=useContext(Statecontext);
  console.log("state",state);

  const userInput=(ev)=>{
     setUserInput(ev.target.value)
  }
  const userText=(ev)=>{
    setUserText(ev.target.value)
  }
  const userDate=(ev)=>{
     setUserDate(ev.target.value)
  }
  const userSubmit=(ev)=>{
     ev.preventDefault();

     const temp={
      userinput,
      usertext,
      userdate
     };
     setUserInput("");
     setUserText("");
     setUserDate("");
   //   addTask([...task,temp]);
   dispatch({type:"addTask",payload:[...state.task,temp]})
     console.log(temp);
  }
  
  return (
    <div className='task'>
       <div className='task-flex'>
        <h1>TASK</h1>
        <Link to={"/Home"}>Home</Link>
        <form>
           <TextField id="outlined-basic" label="Task Name" variant="outlined" onChange={userInput}/><br></br>
           <TextField id="outlined-basic" label="Task Name" variant="outlined" onChange={userText}/><br></br>
           <TextField id="outlined-basic" variant="outlined" type="date" onChange={userDate}/><br></br>
           <Button variant="outlined" onClick={(ev)=>userSubmit(ev)}>Add</Button>
        </form>
        {/* {task?.map((item,index)=>
        <h2 key={index}>{item.userinput}{item.userdate}</h2>
        )} */}
       </div>
    </div>
  )
}

export default Task