import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import { MessageProvider } from './components/exampleContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MessageProvider>
      <App/>
    </MessageProvider>
  </React.StrictMode>
);
