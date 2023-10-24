import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<h1>Ayan HOme</h1>} />
      <Route path='/contact' element={<h1>Ayan contact</h1>} />
      <Route path='/about' element={<h1>Ayan about</h1>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='*' element={<h1>not Found</h1>} />
    </Routes>
    <h1>Ayan</h1>
    </>
  )
}

export default App
