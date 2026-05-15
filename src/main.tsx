import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ModalProvider } from './components/Modal/context/ModalContext.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import { initAxios } from './services/axios.service.ts'
import AppHookContainer from './AppHookContainer.tsx'

initAxios();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ModalProvider>
        <AppHookContainer />
      </ModalProvider>
    </ErrorBoundary>
  </StrictMode>,
)
