import './App.css'
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { RouterProvider } from 'react-router-dom';
import { router } from './main.tsx';
import UserTable from './components/UserTable';

const App = () => {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
              Table Football Rank
            </Typography>
            <Button color="inherit">Ranking</Button>
            <Button color="inherit">Last Games</Button>
            <Button color="inherit">Add Match</Button>
            <Button color="inherit">Register</Button>
          </Toolbar>
        </AppBar>

        <Box sx={{ pt: 8 }}>
          <Container>
            <UserTable users={users} />
          </Container>
        </Box>

        <RouterProvider router={router} />
      </Box>
    </>
  )
}

export default App;
