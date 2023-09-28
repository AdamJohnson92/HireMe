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

export const UserContext = createContext();
export const ArrayContext = createContext();

function Home() {
  const homer = {
    firstName: 'Homer',
    lastName: 'Simpson',
    email: 'homer@doh.com',
    location: 'Springfield',
    education: ['Oxford'],
    skills: ['Javascript', 'React', 'Node', 'MERN Stack', 'Donut Consumption'],
    isEmployer: false
  }

  const oscar = {
    firstName: 'Oscar',
    lastName: 'Grouch',
    email: 'oscar@grumble.com',
    location: 'Seseme Street',
    education: ['Cambridge'],
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
  const [user, setUser] = useState(candidateArray[0])

  return (
    <div className="hire-app">
      <UserContext.Provider value={user}>
        <Header></Header>
        <ArrayContext.Provider value={candidateArray}>
          {/* Two columns with images for reviews */}
          
          <Welcome />
          <section className="columns">
            <div className="column">
              <img src={employer} alt="Employer Review" width="300" height="250" />
            </div>
            <div className="column">
              <img src={candidate} alt="Candidate Review" width="300" height="250" />
            </div>
          </section>
          <Profile/>
        </ArrayContext.Provider>
      </UserContext.Provider>
      <Footer />

    </div>
  );
}

export default Home;