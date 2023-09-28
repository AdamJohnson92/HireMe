import '../App.css';
import React, {useState} from 'react'
// import { LoginContext } from './Context/LoginContext'
import candidate from '../assets/candidate.png'
import employer from "../assets/employer.png";
import Header from '../Components/Header';
import Profile from '../Components/Profile';
import Footer from '../Components/Footer'
import { createContext } from "react";

export const UserContext = createContext();
export const ArrayContext = createContext();

function Home() {
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
  const [user, setUser] = useState(candidateArray[1])

  return (
<div className="hire-app">
<UserContext.Provider value={user}>
  <Header></Header>
  <ArrayContext.Provider value={candidateArray}>
  <img src={candidate} alt="Candidate" width="250" height="250" />
<img src={employer} alt="Employer" width="250" height="250" />
    <Profile></Profile>
  </ArrayContext.Provider>
</UserContext.Provider>
<Footer></Footer>

</div>
  );
}

export default Home;