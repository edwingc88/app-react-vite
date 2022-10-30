import TaskCard from './TaskCard'
import React,{useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {

  const {tasks} = useContext(TaskContext);

  if(tasks.length === 0){
    return <h1 className="text-white text-4xl text-center">No hay tareas aun</h1>   
  }

  return (
        <ul className="grid grid-cols-4 gap-2">
            {
              tasks.map((task)=>(     
                <TaskCard key={task.id} task={task} />
                ))
            }
        </ul>
  )
}

export default TaskList