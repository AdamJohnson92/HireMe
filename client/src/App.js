import './App.css';
import React, {useState} from 'react'
import Login from "./Components/Login"
import { LoginContext } from './Context/LoginContext'
import Header from './Components/Header';

function App() {

  const [candidateLoggedIn, setCandidateLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  return (
    <div className="hire-app">
      <LoginContext.Provider value={{userEmail, setUserEmail, candidateLoggedIn, setCandidateLoggedIn }}>
        <Header></Header>
        <Login></Login>
      </LoginContext.Provider>
      
    </div>
  );
}

export default App;
