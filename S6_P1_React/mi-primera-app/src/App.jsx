import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Saludo from './saludo.jsx'

function App() {
  return (
    <div>
      <h1>Mi app</h1>
      <Saludo />
      <Saludo />
    </div>
  )
}

export default App
