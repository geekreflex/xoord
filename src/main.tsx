import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{ colorScheme: 'dark' }}
  >
    <App />
  </MantineProvider>
);
