import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LangContextProvider from './context/LangContext';
import ThemeContextProvider from './context/ThemeContext';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './style/index.scss';


ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
