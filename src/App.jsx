import { useState } from 'react'

import './App.css'
import FirstNav from './compounts/FirstNav'
import Navbar from './compounts/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstNav/>
    <Navbar/>
    </>
  )
}

export default App
