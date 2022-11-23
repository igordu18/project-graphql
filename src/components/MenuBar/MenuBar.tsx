import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const MenuBar = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          GraphQL API
        </Typography>
        <Link
          to={'/create'}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Button variant="contained" sx={{ my: 1, mx: 1.5 }}>
            Criar
          </Button>
        </Link>
        <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>
          <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Home
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
