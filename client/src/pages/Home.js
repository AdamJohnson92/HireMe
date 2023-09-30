import '../App.css';
import React, { useState } from 'react'
// import { LoginContext } from './Context/LoginContext'
import candidate from '../assets/candidate.png'
import employer from "../assets/employer.png";
import Header from '../Components/Header';
import Profile from './Profile';
import Footer from '../Components/Footer'
import { createContext } from "react";
import Welcome from '../Components/Welcome'
import InspectCandidate from '../Components/InspectCandidate';

export const UserContext = createContext();
export const ArrayContext = createContext();

function Home() {
  const homer = {
    firstName: 'Homer',
    lastName: 'Simpson',
    email: 'homer@doh.com',
    locationCity: 'Springfield',
    locationState: 'Illinois',
    education: 'Oxford',
    skills: ['Javascript', 'React', 'Node', 'MERN Stack', 'Donut Consumption'],
    isEmployer: false
  }

  const oscar = {
    firstName: 'Oscar',
    lastName: 'Grouch',
    email: 'oscar@grumble.com',
    locationCity: 'Seseme Street',
    locationState: 'Wyoming',
    education: 'Cambridge',
    skills: ['Handlebars', 'Garbage'],
    isEmployer: false
  }

  const employerTest = {
    firsName: 'Business Inc.',
    email: 'business@inc.com',
    isEmployer: true
  }

  const candidateArray = [homer, oscar]
  const [candidateLoggedIn, setCandidateLoggedIn] = useState(false)
  //upon login, setUser to update the Context Provider.
  const [user, setUser] = useState(homer)


  return (
    <div className="hire-app">
      <UserContext.Provider value={user}>
        <ArrayContext.Provider value={candidateArray}>
          {/* Two columns with images for reviews */}
          <Welcome />
          <Profile />
          {/* <InspectCandidate></InspectCandidate> */}
        </ArrayContext.Provider>

      </UserContext.Provider>
      <Footer />

    </div>
  );
}

export default Home;