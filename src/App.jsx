import './App.css'

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes />
      </UserStorage>
    </BrowserRouter>
  )
}

export default App
