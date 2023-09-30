import React from 'react';
import LoginCandidate from '../Components/LoginCandidate'
import LoginEmployer from '../Components/LoginEmployer'

import Auth from '../utils/auth';

//maybe radio button to eliminate dual login forms 
//useMutation LOGIN_CANDIDATE/LOGIN_EMPLOYER

const Login = (props) => {

  return (
    <main className="flex-row justify-center mb-4" style={{ marginTop: '275px' }}>
      <LoginCandidate />
      <LoginEmployer />
    </main>
  );
};

export default Login;
