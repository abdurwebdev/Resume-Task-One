import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import RecipieProvider from './context/RecipieProvider.jsx'
import { Toaster } from 'sonner'
import 'remixicon/fonts/remixicon.css'
import FavProvider from './context/FavProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster richColors position='top-right'/>
    <FavProvider>
    <RecipieProvider>
   
    <App />
    
    </RecipieProvider>
    </FavProvider>
  </StrictMode>
,
)
