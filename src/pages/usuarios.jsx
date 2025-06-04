// Lista os usuarios cadastrados.
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../utils/storage';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setUsuarios(getUsers());
  }, []);

  const handleDelete = (index) => {
    deleteUser(index);
    setUsuarios(getUsers());
  };

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
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.nome}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.telefone}</TableCell>
                <TableCell>{user.cpf}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(index)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
}

export default Usuarios;