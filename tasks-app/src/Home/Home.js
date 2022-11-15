import React from 'react'
import './Home.css'
import Login from '../Login/Login'
import { createSearchParams, Link, useNavigate, useState } from 'react-router-dom'
import { Statecontext } from '../Context/stateContext'
import { useContext } from 'react'
import Checkbox from '@mui/material/Checkbox';


const Home = () => {
  const navigate=useNavigate();
  const {state,dispatch}=useContext(Statecontext);
  console.log(state);

  const onEdit=(id)=>{
      navigate({
        pathname:"/Task",
        search:createSearchParams({
          id:id
        }).toString()
      })
  }
  const onDelete=(id)=>{
    dispatch({type:"deltask",payload:id})
  }
  return (
    <div className='home-page'>
       <div className='home-flex'>
          <h2><Link to={"/"}>Back</Link></h2>
          <h2><Link to={"/Task"}>Tasks</Link></h2>
       </div>
       {state.task?.map((item,index)=>
       <div className='india' key={index}>
          <h1>{item.userinput}</h1>
          <h3>{item.usertext}</h3>
          <h5>{item.userdate}</h5>
          <button onClick={()=>onEdit(item.id)}>Edit</button>
          <button onClick={()=>onDelete(item.id)}>Delete</button>
        </div>
       )}
    </div>
  )
}

export default Home