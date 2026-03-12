import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import RecipieProvider from './context/RecipieProvider.jsx'
import { Toaster } from 'sonner'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position='top-right'/>
    <RecipieProvider>
   
    <App />
    
    </RecipieProvider>
  </StrictMode>
,
)
