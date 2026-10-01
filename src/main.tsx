
//Strict mode in JavaScript is a special directive that turns off lenient parsing and throws errors for bad coding practices that are normally ignored
import { StrictMode } from 'react';
//createRoot is a React function that takes a browser DOM node and lets you display React components inside it
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//catches JavaScript errors anywhere in its child component tree, logs those errors, and shows a backup screen instead of crashing the whole app
import { ErrorBoundary } from './components/error-boundary';
import { ThemeProvider } from './lib/theme';

import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
);

