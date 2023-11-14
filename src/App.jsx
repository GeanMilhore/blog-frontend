import './App.css'

import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { UserStorage } from "./UserContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <ToastContainer />
        <Routes />
      </UserStorage>
    </BrowserRouter>
  )
}

export default App
