import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material';
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
          <Route path="/" element={<Cadastro />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
