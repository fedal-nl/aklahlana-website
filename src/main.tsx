import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes cache time
      gcTime: 1000 * 60 * 30, // 30 minutes garbage collection time
      refetchOnWindowFocus: false, // Disable refetching on window focus
      refetchOnReconnect: false, // Disable refetching on reconnect
       retry: 1, // Retry failed requests once
       retryDelay: 1000, // Wait 1 second before retrying
      refetchOnMount: false, // Disable refetching on component mount if data is fresh
       refetchInterval: false, // Disable automatic refetching at intervals
       refetchIntervalInBackground: false, // Disable refetching in the background
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
