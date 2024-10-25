import './App.css'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { RouterProvider } from 'react-router-dom';
import { router } from './main.tsx';

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
              Table football rank
            </Typography>
            <Button color="inherit">Ranking</Button>
            <Button color="inherit">Last Games</Button>
            <Button color="inherit">Add Match</Button>
            <Button color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
        <RouterProvider router={router} />
      </Box>
    </>
  )
}

export default App
