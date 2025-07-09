import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { Toaster } from 'react-hot-toast';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <App />
<Toaster position="top-right" reverseOrder={false} />
    </CartProvider>
  </StrictMode>,
)
