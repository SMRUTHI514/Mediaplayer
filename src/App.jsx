import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Landing from './pages/Landing'
import Log from './pages/Log'
import Reg from './pages/Reg'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/his' element={<History />} />
        <Route path='/' element={<Landing />} />
        <Route path='/log' element={<Log />} />
        <Route path='/reg' element={<Reg />} />
      </Routes>
      <Footer/>
      <ToastContainer/>

    </>
  )
}

export default App
