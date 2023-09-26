import './App.css';
import React, {useState} from 'react'
import Login from "./Components/Login"
// import { LoginContext } from './Context/LoginContext'
import Header from './Components/Header';
import Profile from './Components/Profile';
import { createContext } from "react";

export const UserContext = createContext();
export const ArrayContext = createContext();

function App() {

  const homer = {
    firstName: 'Homer',
    lastName: 'Simpson',
    email: 'homer@doh.com',
    location: 'Springfield',
    education: ['Oxford'],
    skills: ['Javascript', 'React', 'Node', 'MERN Stack', 'Donut Consumption']
  }

  const oscar = {
    firstName: 'Oscar',
    lastName: 'Grouch',
    email: 'oscar@grumble.com',
    location: 'Seseme Street',
    education: ['Cambridge'],
    skills: ['Handlebars', 'Garbage']
  }

  const candidateArray = [homer, oscar]

  const [candidateLoggedIn, setCandidateLoggedIn] = useState(false)
  const [user, setUser] = useState(candidateArray[0])

  return (
    <div className="hire-app">
      <UserContext.Provider value={user}>
        <Header></Header>
        <Login></Login>
        <ArrayContext.Provider value={candidateArray}>
          <Profile></Profile>
        </ArrayContext.Provider>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
