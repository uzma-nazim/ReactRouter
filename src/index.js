import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import App from './App';
import About from './component/About';
import Contact from './component/contact';
import Dashboard from './component/dashbord';
import Home from './component/home';
import Login from './component/login';
import Logout from './component/logout';

import reportWebVitals from './reportWebVitals';
let loginCheck = true
ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/dashboard' element={loginCheck? <Dashboard/>: <Navigate to="/login" replace/>} />
        <Route path='*' element={<h1>404 page not found</h1>} />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
