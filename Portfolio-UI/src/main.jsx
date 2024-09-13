import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './Styles/Global.modules.css';
import { ContactProvider } from './Context/ContactContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
  </StrictMode>
);