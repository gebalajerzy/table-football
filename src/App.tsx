import './App.css'
import { NavBar } from './components/NavBar.tsx';
import AppRoutes from './AppRoutes.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    }
  },
});


const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar>
          <AppRoutes />
        </NavBar>
      </QueryClientProvider>
    </>
  )
}

export default App
