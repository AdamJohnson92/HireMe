import './App.css';
import React, {useState} from 'react'
import Login from "./Components/Login"
import { LoginContext } from './Context/LoginContext'

function App() {

  const [candidateLoggedIn, setCandidateLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  return (
    <div className="hire-app">
      <LoginContext.Provider value={{userEmail, setUserEmail, candidateLoggedIn, setCandidateLoggedIn }}>
        <Login></Login>
      </LoginContext.Provider>

      <h1>HELLO!</h1>
      
    </div>
  );
}

export default App;
