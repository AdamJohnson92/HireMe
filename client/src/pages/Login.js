import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import LoginCandidate from '../Components/LoginCandidate'
import LoginEmployer from '../Components/LoginEmployer'

import Auth from '../utils/auth';

//maybe radio button to eliminate dual login forms 
//useMutation LOGIN_CANDIDATE/LOGIN_EMPLOYER

const Login = (props) => {

  return (
    <main className="flex-row justify-center mb-4">
      <LoginCandidate />
      <LoginEmployer />
    </main>
  );
};

export default Login;
