// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Import your CSS styles
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
