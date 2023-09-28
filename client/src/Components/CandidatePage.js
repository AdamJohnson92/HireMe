import { UserContext } from "../pages/Home";
import Skill from './Skill'
import React, { useContext } from "react";

export default function CandidatePage(){

    const user = useContext(UserContext)
    //useMutation to edit skills/education
    //conditional React rendering for if isEmployer===true, don't display edit buttons. for editing: Popup modal that can be opened by candidates, but not employers.
    
    return(
        <>
            <h2>Candidate Profile</h2>
            <h1> Hello, {user.firstName}!</h1>
            <h3> Location: {user.location}</h3>
            <h3>Skills:</h3>
            <ul>
                <Skill></Skill>
            </ul>
        </>
    )
}