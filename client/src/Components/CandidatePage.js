import { UserContext } from "../pages/Home";
import Skill from './Skill'
import React, { useContext } from "react";

export default function CandidatePage(){

    const user = useContext(UserContext)
    
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