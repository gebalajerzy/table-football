import './App.css'
import { NavBar } from './components/NavBar.tsx';
import AppRoutes from './AppRoutes.tsx';

const App = () => {
  return (
    <>
      <NavBar>
        <AppRoutes />
      </NavBar>
    </>
  )
}

export default App
