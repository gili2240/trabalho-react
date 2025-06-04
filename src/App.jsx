import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material';
// Componente principal que organiza as rotas e a barra de navegação
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cadastro from './pages/Cadastro';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          {/* Define as rotas da aplicação */}
          <Route path="/" element={<Cadastro />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
