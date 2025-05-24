import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './ContextApi/CartContext.jsx'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);



createRoot(document.getElementById('root')).render(
  <StrictMode>
        <CartProvider><App /></CartProvider>
  </StrictMode>,
)
