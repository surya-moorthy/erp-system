import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Board from './pages/Board'

function App() {
  return (
     <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Board/>} path='/board/:id'/>
        </Routes>
     </BrowserRouter> 
  )
}

export default App
