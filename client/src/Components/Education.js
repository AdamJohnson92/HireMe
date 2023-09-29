import React, { useState, useContext } from "react";
import { UserContext, ArrayContext } from "../pages/Home";

export default function Education(){

    const user = useContext(UserContext)
    const candidateArray = useContext(ArrayContext)

    function checkViewer(){
        if (user.isEmployer) {
            return candidateArray[0]
        } else {
            return user}
    }

    const handleRender = checkViewer()

    return(

        <>
        {handleRender.education.map((institution) => (
           <li>{institution}
            {!user.isEmployer? <button className="btn"> X </button> : <></>}
            </li>
        
        ))}
        </>
    )

}