import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
