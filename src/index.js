import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// تحديد المسار الذي يتم نشر التطبيق عليه
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/block-sites-v2">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
