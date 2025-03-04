import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from './Components/Signup/SignupForm.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
  </StrictMode>
  </BrowserRouter>
)
