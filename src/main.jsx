import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Flip, ToastContainer } from 'react-toastify'
import RoutesApp from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesApp />
      <ToastContainer autoClose={2000} transition={Flip} closeButton draggable theme='light' />
    </BrowserRouter >
  </React.StrictMode>,
)
