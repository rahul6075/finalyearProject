import './App.scss'
import { Routes, Route } from 'react-router-dom'

import { HomeScreen, Dashboard } from './pages'
function App() {

  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
