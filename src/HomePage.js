import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  

const HomePage = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/produtos');
        setProdutos(response.data);  
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    };

    carregarProdutos(); 
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Produtos Cadastrados</h1>
      {produtos.length > 0 ? (
        <div className="row">
          {produtos.map((produto) => (
            <div className="col-md-4 mb-4" key={produto.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{produto.nome}</h5>
                  <p className="card-text">Descrição: {produto.descricao}</p>
                  <p className="card-text">
                    <strong>Preço:</strong> R${produto.preco}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">Nenhum produto encontrado.</p>
      )}

      <div className="text-center mt-4">
        <Link to="/cadastrar" className="btn btn-success btn-lg">Cadastrar Produto</Link>
      </div>
    </div>
  );
};

export default HomePage;
