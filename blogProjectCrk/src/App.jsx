/*import '@styles/App.css';
import Router from './router/Router.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router />
  )
}

export default App*/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@styles/App.css'

import Router from './router/Router.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router />
      
  )
}

export default App
