import { useState, createContext, useEffect } from 'react'
import { listTask } from '../types/listTask';

const initialValue = {
  tasks: [
    {description: 'Ala'}
  ]
}
const ContextTask = createContext<listTask>(initialValue)

interface ContextTaskProps {
  children: React.ReactNode;
}

export function ContextTasks({ children }: ContextTaskProps) {
  const [tasks, setTasks] = useState<listTask>(initialValue)

  useEffect(() => {
    setTasks({...tasks})
  },[])
  console.log(tasks)

  return ( 
    <ContextTask.Provider value={tasks}>
      { children }
    </ContextTask.Provider>
   )
}