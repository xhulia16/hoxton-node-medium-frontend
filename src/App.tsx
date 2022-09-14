import { useState } from 'react'
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import { Home } from './pages/Home'


function App() {


  return (
    <div className="App">
     <header>
      <h2>Medium</h2>
     </header>
     <Routes>
     <Route index element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
     </Routes>
    </div>
  )
}

export default App
