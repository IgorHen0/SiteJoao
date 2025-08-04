import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import QuemSou from './pages/QuemSou.jsx';
import Acompanhamentos from './pages/Acompanhamentos.jsx';
import Agendamentos from './pages/Agendamentos.jsx';
import Parcerias from './pages/Parcerias.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'quemsou',
        element: <QuemSou />,
      },
      {
        path: 'acompanhamentos',
        element: <Acompanhamentos />,
      },
      {
        path: 'agendamentos',
        element: <Agendamentos />,
      },
      {
        path: 'parcerias',
        element: <Parcerias />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);