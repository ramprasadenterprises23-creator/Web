//Think of QueryClient as the brain that remembers and manages your API data, and QueryClientProvider as the nervous system that connects that brain to your React components
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
//for local error handling and displaying fallback UI when an error occurs in the component tree
import { ErrorBoundary } from './components/error-boundary';

import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';

import { MainLayout } from './layouts/MainLayout';
import { AppRouter } from './layouts/AppRouter';
const queryClient = new QueryClient();

function App() {
  const { pathname } = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary resetKey={pathname}>
          <MainLayout>
            <AppRouter />
          </MainLayout>
        </ErrorBoundary>

        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

