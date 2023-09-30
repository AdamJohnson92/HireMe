import React, { useState, useContext } from "react";
import { UserContext, ArrayContext } from "../pages/Home";

export default function Skill(user){
    console.log(user.user.user.skills)

    // const user = useContext(UserContext)
    // const candidateArray = useContext(ArrayContext)

    //must get candidate information

    // function checkViewer(){
    //     if (user.user.userisEmployer) {
    //         return
    //     } else {
    //         console.log(user.user.user.skills)
    //         return user.user.user}
    // }

    // const handleRender = checkViewer()

    return(

        <>
        {user.user.user.skills.map((skill) => (
           <li>
            {skill}
            {!user.isEmployer? <button className="btn"> X </button> : <></>}
           </li> 
        ))}
        </>
    )

}