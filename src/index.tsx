import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import { MessageProvider } from './providers/modal/messageContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router/app-router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MessageProvider>
      <RouterProvider router={router} />
    </MessageProvider>
  </React.StrictMode>
);
