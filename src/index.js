import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Footer from './Footer';
import Header from './Header';
import Start from './Start';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    {/* <Footer /> */}
    <Start />
  </React.StrictMode>
);


