import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';

export const NavBar = ({children}: PropsWithChildren) => {
  const navigate = useNavigate();

  return <div>
    <AppBar position="absolute">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Table football rank
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>Ranking</Button>
        <Button color="inherit" onClick={() => navigate('/last-games')}>Last Games</Button>
        <Button color="inherit" onClick={() => navigate('/add-match')}>Add Match</Button>
        <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
      </Toolbar>
    </AppBar>
    {children}
  </div>
}