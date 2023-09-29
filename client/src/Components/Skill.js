import React, { useState, useContext } from "react";
import { UserContext, ArrayContext } from "../pages/Home";

export default function Skill(viwer){

    const user = useContext(UserContext)
    const candidateArray = useContext(ArrayContext)

    //must get candidate information

    function checkViewer(){
        if (user.isEmployer) {
            return candidateArray[0]
        } else {
            return user}
    }

    const handleRender = checkViewer()

    return(

        <>
        {handleRender.skills.map((skill) => (
           <li>
            {skill}
            {!user.isEmployer? <button className="btn"> X </button> : <></>}
           </li> 
        ))}
        </>
    )

}