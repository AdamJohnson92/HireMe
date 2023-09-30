import React, { useState, useContext } from "react";
import CandidatePage from "../Components/CandidatePage";
import EmployerPage from "../Components/EmployerPage";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

export default function Profile() {

  // const [me, setMe] = useState({})
  function renderPage() {
    if (user.isEmployer === true) {
      return <EmployerPage></EmployerPage>
    } else {
      console.log(user)
      return <CandidatePage user={user}></CandidatePage>
    }
  }
  const { firstName: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { firstName: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.firstName === userParam) {
    // setMe(user)
    return <div className="profile">
      
      {renderPage()}
    </div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.firstName) {
    return (
      <h4 style={{ marginTop: '275px' }}>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  // return (
        
  //   )
}
