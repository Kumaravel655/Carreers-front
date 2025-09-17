import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
import App from './App.jsx';

// 1. Import the provider
import { GoogleOAuthProvider } from '@react-oauth/google';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* 2. Wrap your App component with the provider */}
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);s