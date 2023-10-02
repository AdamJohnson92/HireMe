import '../App.css';
import React, { useState } from 'react'
// import { LoginContext } from './Context/LoginContext'
import Profile from './Profile';
import Footer from '../Components/Footer'
import { createContext } from "react";
import Welcome from '../Components/Welcome'


export const UserContext = createContext();
export const ArrayContext = createContext();

function Home() {

  return (
    <div className="hire-app">
          {/* Two columns with images for reviews */}
          <Welcome />
          <Profile />
          {/* <InspectCandidate></InspectCandidate> */}
      <Footer />

    </div>
  );
}

export default Home;