import './App.css';
import React, {useState} from 'react'
import Login from "./Components/Login"
// import { LoginContext } from './Context/LoginContext'
import Header from './Components/Header';
import Profile from './Components/Profile';
import { createContext } from "react";

export const UserContext = createContext();

function App() {

  const adam = {
    firstName: 'Homer',
    lastName: 'Simpson',
    email: 'homer@doh.com',
    location: 'Springfield',
    education: ['Oxford'],
    skills: ['Javascript', 'React', 'Node', 'MERN Stack', 'Donut Consumption']
  }

  const [candidateLoggedIn, setCandidateLoggedIn] = useState(false)
  const [user, setUser] = useState(adam)

  return (
    <div className="hire-app">
      <UserContext.Provider value={user}>
        <Header></Header>
        <Login></Login>
        <Profile></Profile>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
