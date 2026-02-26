import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Produto from './components/produto/Produto';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div className='min-[80vh]'>

      <Routes>
        {/* <Route path='/Home' element={<Produto/>} /> */}
        <Route path='/' element={<Produto/>} />

      </Routes>

      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
