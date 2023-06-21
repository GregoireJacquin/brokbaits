import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import Baits from './pages/Baits'
import DetailBait from './pages/DetailBait'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />  
          <Route path='/baits' element={<Baits/>}/>    
          <Route path="/baits/:id" element={<DetailBait/>}/>    
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
