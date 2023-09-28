import React, { useState, useContext } from "react";
import { UserContext } from "../pages/Home";

export default function Skill(){

    const user = useContext(UserContext)

    return(

        <>
        {user.skills.map((skill) => (
           <li>
            {skill}
           </li> 
        ))}
        </>
    )

}