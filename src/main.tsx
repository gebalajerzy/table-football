import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router-dom';
import { Rank } from './views/Games/Rank/Rank.tsx';
import { LastGames } from './views/Games/LastGames/LastGames.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rank />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/last-games",
    element: <LastGames />
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
