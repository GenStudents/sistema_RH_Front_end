import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div className='min-[80vh]'>
      <Routes>
        <Route/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
