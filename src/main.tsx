import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext.tsx'
import App from './App.tsx'
import "./index.css"; // Ensure this is correct


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
