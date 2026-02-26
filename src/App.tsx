import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="flex min-h-screen flex-col"></div>
      <Navbar/>
      <div className='min-[80vh]'>
      <Routes>
        <Route path="/" element={<div>Conteúdo da Home</div>}/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
