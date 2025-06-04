// Lista os usuarios cadastrados.
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../utils/storage';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]); // Estado que guarda os usuários

  useEffect(() => {
    setUsuarios(getUsers());
  }, []);


  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Usuários Cadastrados
      </Typography>
      {usuarios.length === 0 ? (
        <Typography>Nenhum usuário cadastrado.</Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>CPF</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.nome}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.telefone}</TableCell>
                <TableCell>{user.cpf}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
}

export default Usuarios;