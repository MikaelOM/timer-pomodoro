import { useState } from 'react'

import { Stopwatch } from './components/stopwatch'
import { StopStartButton } from './components/buttons/StopStartButton'
import { ModalTasksList } from './components/modal/ModalTaskList'
import { Task } from './components/tasksList/task'

import './App.css'

function App() {
  const [stop, setStop] = useState(true)

  return (
    <div className="App">
      <Stopwatch stop={stop} />
      <section className='buttonSection'>
        <StopStartButton stop={stop} changeStopValue={() => setStop(!stop)}/>
        <ModalTasksList />
      </section>
      <Task />
    </div>
  )
}

export default App
