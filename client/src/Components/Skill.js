import React, { useState, useContext } from "react";
import { UserContext } from "../App";

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