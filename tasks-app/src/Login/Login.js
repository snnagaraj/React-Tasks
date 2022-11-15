import React, { useState } from 'react'
import './Login.css'
import User from './User.json'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {
  const Navigate=useNavigate()

  const [username,setUserName]=useState("");
  const [userpwd,setUserPwd]=useState("");
  
  const handleUserName=(name)=>{
    console.log(name);
    setUserName(name.target.value)
  }

  const handleUserPwd=(name)=>{
    setUserPwd(name.target.value)
  }

  const handleSubmit=(name)=>{
    name.preventDefault();
    User.filter((select)=>{
      if(select.name===username && select.password===userpwd){
       return Navigate("Home")
      }
   })
    if(username==='' || userpwd===''){
      alert("Invalid!");
      return;
    }
    console.log(username,userpwd);
   
  }
  return (
    <div className='login'>
      <div className='login-flex'>
       <form>
          <TextField id="standard-basic" label="User Name" variant="standard" className='name' onChange={handleUserName}/><br></br>
          <TextField id="standard-basic" label="Password" variant="standard" type="password" onChange={handleUserPwd}/><br></br>
          <Button variant="contained" onClick={(name)=>handleSubmit(name)}>Submit</Button>
       </form>
       </div>
    </div>
  )
}

export default Login