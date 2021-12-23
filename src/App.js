import './App.css';

import Button from '@mui/material/Button';
import React from 'react';
import {Task} from './Task';
import TextField from '@mui/material/TextField';
import {useState} from 'react';

function App() {
  const tasks=["Create Theme","Work on wordpress","Organize office main department","Error solve in HTML template"];
  const [taskname,setTask_name]=useState("");
  const [list,setList]=useState(tasks);
  return (
    <div className="App">
<div className="outer_box">
  <div className="inputbox">    
  <TextField id="filled-basic" label="Filled" fullWidth label ="Enter  New Task" multiline  margin="normal"
          maxRows={4} variant="filled"  onChange={(event)=>setTask_name(event.target.value)}/>
   <Button variant="outlined" className="add_button" onClick={()=>{
   const newTask=[taskname];
    console.log(newTask);
    setList([...list,newTask]);
 }}>Add Task</Button>
 

  </div>
  <div className="list">
  <ul>
    <li>All</li>
    <li>Active </li>
    <li>Completed</li>
  </ul>
  </div>
      
 <Task list={list} setList={setList} />
      
    </div>
    
    </div>
    
  );
}

export function Todo({tasklist,deleteButton})
{
  
  return(
    <div className="tasks">
    <div className="taskdetails"><input type="checkbox" /><p className="taskname">{tasklist}</p></div>  <p className="delete">{deleteButton}</p>
    </div>
  );
}

export default App;
