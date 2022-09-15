import { useState } from 'react'
import './App.css'
import {Routes, Route, Navigate, Link} from 'react-router-dom'
import { Home } from './pages/Home'
import { SinglePost } from './pages/SinglePost'
import { PageNotFound } from './pages/PageNotFound'


function App() {


  return (
    <div className="App">
     <header>
      <Link to={'/home'}>
      <h2>Medium</h2>
      </Link>
     </header>
     <main>
     <Routes>
     <Route index element={<Navigate to='/home' />} />
     <Route path='/home' element={<Home />} />
     <Route path='/home/:itemId' element={<SinglePost />} />
     <Route path='*' element={<PageNotFound />} />
     </Routes>
     </main>
    </div>
  )
}

export default App
