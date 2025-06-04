import { AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function form() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => navigate('/')}>
          Cadastro de Usuários
        </Button>
        <Button color="inherit" onClick={() => navigate('/usuarios')}>
          Usuários Cadastrados
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default form;