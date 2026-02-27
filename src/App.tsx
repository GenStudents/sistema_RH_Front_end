import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Page from "./app/sobre/page"; // Página de Sobre Nós
import Produto from "./pages/produto/Produto";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Page />} />
        <Route path="/produto" element={<Produto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;