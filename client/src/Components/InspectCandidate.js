import { ArrayContext, UserContext } from "../pages/Home";
import Skill from './Skill'
import React, { useState, useContext } from "react";

export default function InspectCandidate(){

    const candidateArray = useContext(ArrayContext)
    const user = useContext(UserContext)

    const [viewer, setViewer] = useState(user)

    const inspectCandidate = candidateArray[0]

    //useMutation to edit skills/education/name
    
    return(
        <>
            <h2>View Candidate Profile</h2>
            
            <h1> Name: {inspectCandidate.firstName} {inspectCandidate.lastName}</h1>
            <h3>Contact: {inspectCandidate.email}</h3>
            <h3> Location: {inspectCandidate.locationCity}, {inspectCandidate.locationState}</h3>
            <h4>Education: {inspectCandidate.education}</h4>
            <h3>Skills:</h3>
            <ul>
                <Skill viwer={viewer}></Skill>
            </ul>
            
        </>
    )
}