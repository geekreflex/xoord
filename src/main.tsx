import React from 'react';
import ReactDom from 'react-dom/client';
import App from '@/App.tsx';
import '@/styles/global.css';

import { Provider } from 'react-redux';
import { store } from '@/app/store.ts';

ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
