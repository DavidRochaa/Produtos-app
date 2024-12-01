import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; 
import ProdutosPage from './ProdutosPage';
import CadastroPage from './CadastroPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/produtos" element={<ProdutosPage />} />  
        <Route path="/cadastrar" element={<CadastroPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
