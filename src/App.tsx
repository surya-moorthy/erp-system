import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Board from './pages/Board'
import Navbar from './components/layout/Navbar'

function App() {
  return (
     <BrowserRouter>
       <Navbar/>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Board/>} path='/board/:id'/>
        </Routes>
     </BrowserRouter> 
  )
}

export default App
