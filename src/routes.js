import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Inicio from "Pages/Inicio";
import Projetos from "Pages/Projetos";
import Sobre from "Pages/Sobre";

function Rotas() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/projetos" element={<Projetos/>}/>
      <Route path="/sobremim" element={<Sobre/>}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default Rotas;
