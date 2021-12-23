import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { Todo } from './App';

export function Task({ list, setList }) {
  return(
  <div className="task_box">
    {list.map((ta,index) => <Todo key={index} deleteButton={<IconButton aria-label="delete" color="primary"  onClick={()=>
    {
      console.log("delete task");
      const deleteIndex=index;
      const remaining_tasks=list.filter((lt,idx)=>deleteIndex !==idx);
      setList(remaining_tasks);
    }
    
    }> <DeleteIcon /></IconButton>}
    
    
    
    
    
    
    
    tasklist={ta} />)}
  </div>
  );
}
