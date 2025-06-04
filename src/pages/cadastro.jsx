import { TextField, Button, Box, Typography, Stack } from '@mui/material';
import { useState } from 'react';
import { saveUser } from '../utils/storage'; // Função que salva no localStorage

function Cadastro() { 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');

  // Função chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { nome, email, telefone, cpf }; // Monta um objeto com os dados que foram cadastradpos 
    saveUser(newUser); // aqui ele salva o objeto, no caso o novo usuario no local storage
    setNome(''); // Daqui pra baixo é para zerar as informações de cadastro após salvar
    setEmail('');
    setTelefone('');
    setCpf('');
    alert('Usuário cadastrado com sucesso!');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Cadastro de Usuários
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
          <TextField
            label="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default Cadastro;