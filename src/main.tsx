import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextTasks } from './context/contextTasks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextTasks>
      <App />
    </ContextTasks>
  </React.StrictMode>
)
