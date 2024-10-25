import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { setupWorker } from 'msw/browser';
import { getGamesMocks } from './mocks/getGames.mocks.ts';


const worker = setupWorker(
  getGamesMocks
);

worker.start().then(() => {
  createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
})
