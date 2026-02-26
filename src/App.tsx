import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'

function App() {
  return (
    <>
    <BrowserRouter>

      <div className='min-[80vh]'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>

    </BrowserRouter>
    </>
  )
}

export default App
