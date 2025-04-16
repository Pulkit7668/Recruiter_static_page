import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignupForm from './Components/Signup/SignupForm.jsx';
// import RecruiterHome from './Components/RecruiterHome.jsx';
// import ClientHome from './Components/ClientHome.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
)
